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

router.post("/usertag", (req, res, next) => {
    // console.log(req.user.id, req.body);
    if (!req.user) {
        res.status(401).json({
            message: "Unauthorized"
        });
    }

    databaseHandler.addUserTag(req.user.id, req.body.tag)
        .then(resposne => {
            res.status(201).json({
                message: "Tag Added Successfully"
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: "Something Went Wrong"
            });
        });
});

router.get("/usertag", (req, res, next) => {
    if (!req.user) {
        res.status(401).json({
            message: "Unauthorized"
        });
    }

    databaseHandler.getUserTags(req.user.id)
        .then(tags => {
            tags = databaseParser(tags);
            res.status(200).send(tags);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: "Something Went Wrong"
            });
        });
})

module.exports = {
    router
}