const express = require("express");
const bcrypt = require("bcrypt");

const databaseHandler = require("./../database/index");

const router = express.Router();

router.get("/", (req, res, next) => {
    res.send("Auth Router Working");
});

// router.post("/signup", (req, res, next) => {

// });

module.exports = {
    router
}