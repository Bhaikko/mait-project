const express = require("express");

const authRouter = require("./auth").router;
const datingRouter = require("./dating").router;
const messagesRouter = require('./message').router;
const passport = require("./../passport").passport;

const router = express.Router();

router.use("/auth", authRouter);
router.use("/dating", passport.authenticate("jwt", { session: false }), datingRouter);
router.use("/messages", passport.authenticate("jwt", { session: false }), messagesRouter);


router.get("/", (req, res, next) => {
    res.send("api Route working");
});

module.exports = {
    router
}