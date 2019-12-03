const express = require("express");

const databaseHandler = require("./../database/index");
const { databaseParser } = require('./utility');

const router = express.Router();

router.get("/", (req, res, next) => {
    res.send("Dating Router Working");
});

router.get("/tags", (req, res, next) => {
    databaseHandler.getTags()
        .then(tags => {
            tags = databaseParser(tags);
            res.status(200).send(tags);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: "Something Went wrong."
            });
        })
});

module.exports = {
    router
}