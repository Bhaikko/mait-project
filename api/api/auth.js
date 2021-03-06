const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { v4 } = require('uuid');
const nodemailer = require('nodemailer');

const saltRounds = 10;

const databaseHandler = require("./../database/index");
const passport = require("./../passport").passport;
const { TOKEN_SECRET_KEY, EMAIL_ADDRESS, EMAIL_PASSWORD } = require("./../enviroments");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Auth Router Working");
});

const validatePassword = (password, res) => {
    if (password.length < 8) {
        res.status(400).json({
            message: "Password Length Must Be Greater Than 8"
        });
    } else {
        const checkList = {
            hasUpperCaseLetter: false,
            hasLowerCaseLetter: false,
            hasNumber: false
        }

        for (let i = 0; i < password.length; i++) {
            if (!checkList.hasLowerCaseLetter) {
                if (password[i] >= 'a' && password <= 'z') {
                    checkList.hasLowerCaseLetter = true;
                }
            }

            if (!checkList.hasUpperCaseLetter) {
                if (password[i] >= 'A' && password[i] <= 'Z') {
                    checkList.hasUpperCaseLetter = true;
                }
            }

            if (!checkList.hasNumber) {
                if (password[i] <= '9' && password[i] >= '0') {
                    checkList.hasNumber = true;
                }
            }
        }

        if (!checkList.hasUpperCaseLetter) {
            res.status(400).json({
                message: "Password Must Have Atleast One Uppercase Letter"
            });
            return false;
        }
        if (!checkList.hasLowerCaseLetter) {
            res.status(400).json({
                message: "Password Must Have Atleast One Lowercase Letter"
            });
            return false;
        }
        if (!checkList.hasNumber) {
            res.status(400).json({
                message: "Password Must Have Atleast One Number"
            });
            
            return false;
        }

        return true;
    }
}

const validateEnrollmentNumber = (enrollmentNumber, res) => {
    if (enrollmentNumber.length !== 10 && enrollmentNumber.length !== 11) {
        res.status(400).json({
            message: "Invalid Enrollment Number."
        });
        return false;
    }

    if (enrollmentNumber.length === 10) {
        enrollmentNumber = "0" + enrollmentNumber;
    }

    const rollNumber = enrollmentNumber.slice(0, 3);
    const clgCode = enrollmentNumber.slice(3, 6);
    const courseCode = enrollmentNumber.slice(6, 9);
    const yearCode = enrollmentNumber.slice(9, 11);

    const ipuCollegeCode = {
        101: true,
        512: true,
        115: true,
        207: true,
        702: true,
        962: true,
        156: true,
        209: true,
        768: true,
        132: true,
        965: true,
        133: true,
        964: true,
        148: true,
        963: true,
        150: true,
        161: true,
        164: true,
        208: true
    };

    if (ipuCollegeCode[clgCode]) {
        return true;
    } else {
        res.status(400).json({
            message: "Invalid Enrollment Number."
        });
    }
}

const sendEmail = (mailOptions) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, 
        auth: {
          user: EMAIL_ADDRESS, 
          pass: EMAIL_PASSWORD 
        }
    });

    transporter.sendMail(mailOptions, function(error, response){
        if (error) {
            console.log(error);
            return;
        } 

        console.log(`New User Signed Up, ${response.get().email}`);
    });
}

const sendVerificationEmail = (userId) => {
    return databaseHandler.getUserByUserid(userId)
        .then(response => {
            if (!response) {
                return;
            }
            const message = `
                Hi ${response.username}, Thank you registering yourself on our site.
                Your Verification Code is
                ${response.isVerified}

            `;
            
            const mailOptions = {
                from: EMAIL_ADDRESS,
                to: response.email, 
                subject: 'Verification Code',
                text: message
            }       
            
            return sendEmail(mailOptions);
        });
}

router.post("/signup", (req, res) => {
    if (!validatePassword(req.body.password, res)) {
        return;
    }

    if (!validateEnrollmentNumber(req.body.enrollmentNumber, res)) {
        return;
    }

    bcrypt.hash(req.body.password, saltRounds, function(err, password) {
        if (err) {
            throw err;
        }

        const verificationCode = v4(); 
        databaseHandler.addUser(req.body.name, req.body.username, req.body.email, password, verificationCode, req.body.enrollmentNumber)
            .then(user => {
                sendVerificationEmail(user.id)
                    .then(response => {
                        res.status(201).json({
                            user: user 
                        });
                    });
            })
            .catch(err => {
                res.status(400).json({
                    message: err.errors[0].message
                });
            });
    });
});

router.post('/resendVerification', (req, res) => {
    sendVerificationEmail(req.body.userId)
        .then(response => {
            res.status(200).json({
                message: "Verfication Code Sent"
            });
        })
        .catch(err => {
            console.log(err);
            res.status(400).json({
                message: "Something Went Wrong"
            });
        })
});

router.post("/login", (req, res, next) => {
    passport.authenticate("user", { session: false }, (err, user, info) => {
        if (err || !user) {
            return res.status(400).json({
                message: "Invalid Email or Password"
            });
        }

        req.login(user, { session: false }, err => {
            if (err) {
                res.status(400).json({
                    message: "Invalid Email or Password"
                });
            }

            const expirationTime = new Date().getTime() + (60 * 60 * 1000);
            
            const token = jwt.sign({
                data: user,
                exp: expirationTime
            }, TOKEN_SECRET_KEY);

            return res.json({
                expirationTime: expirationTime,
                token: token
            });
        });
    })(req, res, next);
});

router.put('/updatePassword', (req, res) => {
    const {
        oldPassword,
        newPassword,
        confirmPassword,
        id
    } = req.body;


    databaseHandler.getPasswordHash(id)
        .then(password => {
            password = password.get().password;
            bcrypt.compare(oldPassword, password, function(err, response) {
                if (response) {
                    // change password
                    if (newPassword !== confirmPassword) {
                        res.status(400).json({
                            message: "New Password and Confirm Password do not match"
                        });
                    } else {
                        bcrypt.hash(newPassword, saltRounds, function(err, hashedPassword) {
                            if (err) {
                                throw err;
                            }
                            
                            databaseHandler.updatePassword(id, hashedPassword)
                                .then(response => {
                                    res.status(200).json({
                                        message: "Password Changed Successfully"
                                    });
                                });
                            
                        });
                    }
                } else {
                    res.status(400).json({
                        message: "Old password does not match"
                    });
                }
            });
        })
        .catch(err => {
            res.status(500).json({
                message: "Something Went Wrong."
            });
        });
});

router.put('/verify', (req, res) => {
    databaseHandler.getVerificationCode(req.body.userId)
        .then(response => {
            const userVerificationCode = req.body.code;
            const verificationCode = response.isVerified;

            if (verificationCode === userVerificationCode) {
                databaseHandler.updateVerification(req.body.userId)
                    .then(resposne => {
                        res.status(200).json({
                            message: "Thank you for verifying yourself."
                        });
                    })
            } else {
                res.status(400).json({
                    message: "Wrong Verification Code, Try Again"
                });
            }
        });
});


router.get('/verification', (req, res) => {
    databaseHandler.checkVerification(req.query.id)
        .then(response => {
            if (response.isVerified) {
                res.status(200).json({
                    isVerified: response.isVerified === "1" ? true : false
                });
            }
        })
});

router.post('/forgotPassword', (req, res) => {
    databaseHandler.getUseByEmailAndUsername(req.body.email, req.body.username)
        .then(user => {
            if (!user) {
                res.status(400).json({
                    message: "No User Exist"
                });
                return;
            }

            const newPassword = v4();
            bcrypt.hash(newPassword, saltRounds, function(err, hashedPassword) {
                if (err) {
                    throw err;
                }
                
                databaseHandler.updatePassword(user.get().id, hashedPassword)
                    .then(response => {
                        const message = `
                            Hi ${user.get().username},
                            Your New Password is ${newPassword}
                            However, You can change this password from profile tab of the website.

                        `;
                        
                        const mailOptions = {
                            from: EMAIL_ADDRESS,
                            to: user.get().email, 
                            subject: 'Reset Password',
                            text: message
                        }       
                        
                        sendEmail(mailOptions);
                        res.status(200).json({
                            message: "New Password Has Been Mailed to your Email."
                        });
                    });
                
            });
        })
        .catch(err => {
            console.log(err);
            res.status(400).json({
                message: "Somthing Went Wrong"
            });
        })
})

router.get("/logout", (req, res) => {
    res.logout();
    res.sendStatus(200);
});

module.exports = {
    router
}