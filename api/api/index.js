const express = require("express");

const authRouter = require("./auth").router;

const router = express.Router();

router.use("/auth", authRouter);

router.get("/", (req, res, next) => {
    res.send("api Route working");
});

module.exports = {
    router
}