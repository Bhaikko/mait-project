const express = require("express");

const authRouter = require("./auth").router;
const datingRouter = require("./dating").router;
const passport = require("./../passport").passport;

const router = express.Router();

router.use("/auth", authRouter);
router.use("/dating", passport.authenticate("jwt", { session: false }), datingRouter);

router.get("/", (req, res, next) => {
    res.send("api Route working");
});

module.exports = {
    router
}