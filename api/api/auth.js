const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const saltRounds = 10;

const databaseHandler = require("./../database/index");
const passport = require("./../passport").passport;
const { TOKEN_SECRET_KEY } = require("./../enviroments");

const router = express.Router();

router.get("/", (req, res, next) => {
    res.send("Auth Router Working");
});

router.post("/signup", (req, res, next) => {
    bcrypt.hash(req.body.password, saltRounds, function(err, password) {
        if (err) {
            throw err;
        }

        databaseHandler.addUser(req.body.name, req.body.username, req.body.email, password)
            .then(user => res.status(200).send({
                user: user 
            }))
            .catch(err => {
                res.status(400).send({
                    message: err.errors[0].message
                });
                // throw err;
            });
    });
});

router.post("/login", (req, res, next) => {
    passport.authenticate("user", { session: false }, (err, user, info) => {
        if (err || !user) {
            return res.status(400).send({
                message: "Invalid Email or Password"
            });
        }

        req.login(user, { session: false }, err => {
            if (err) {
                // res.json(err);
                res.status(400).send({
                    message: "Invalid Email or Password"
                });
            }

            const expirationTime = new Date().getTime() + (60 * 60 * 1000);
            
            const token = jwt.sign({
                data: user,
                exp: expirationTime
            }, TOKEN_SECRET_KEY);

            return res.send({
                userId: user.id,
                username: user.name,
                email: user.email,
                expirationTime: expirationTime,
                token: token 
            });
        });
    })(req, res, next);
});

router.put('/updatePassword', (req, res, next) => {

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
                message: "Password Changed Successfully"
            });
        });
});

router.get("/logout", (req, res, next) => {
    res.logout();
    res.sendStatus(200);
});

module.exports = {
    router
}