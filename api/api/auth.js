const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const saltRounds = 10;

const databaseHandler = require("./../database/index");
const passport = require("./../passport").passport;
const { TOKEN_SECRET_KEY } = require("./../constants");

const router = express.Router();

router.get("/", (req, res, next) => {
    res.send("Auth Router Working");
});

router.post("/signup", (req, res, next) => {
    bcrypt.hash(req.body.password, saltRounds, function(err, password) {
        if (err) {
            throw err;
        }

        databaseHandler.addUser(req.body.name, req.body.email, password)
            .then(user => res.status(200).json({
                user: user 
            }))
            .catch(err => {
                res.status(400).json({
                    message: "Email Already Exists" 
                });
                throw err;
            });
    });
});

router.post("/login", (req, res, next) => {
    console.log(req.body);
    passport.authenticate("user", { session: false }, (err, user, info) => {
        if (err || !user) {
            return res.status(400).json({
                message: "Invalid Email or Password"
            });
        }

        req.login(user, { session: false }, err => {
            if (err) {
                res.json(err);
            }

            const expirationTime = new Date().getTime() + (60 * 60 * 1000);
            
            const token = jwt.sign({
                data: user,
                exp: expirationTime
            }, TOKEN_SECRET_KEY);

            return res.json({
                userId: user.id,
                expirationTime: expirationTime,
                token: token 
            });
        });
    })(req, res, next);
});

router.get("/logout", (req, res, next) => {
    res.logout();
    res.sendStatus(200);
});

module.exports = {
    router
}