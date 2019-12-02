const express = require("express");

const databaseHandler = require("./../database/index");

const router = express.Router();

router.get("/", (req, res, next) => {
    res.send("Dating Router Working");
});

module.exports = {
    router
}