const express = require('express');

const router = express.Router();

const databaseHandler = require("./../database/index");
// const { databaseParser } = require('./utility');

router.get("/", (req, res, next) => {
    res.send("Message Router Working");
});

const errorHandler = (error, res, message = "Something Went wrong") => {
    console.log(error);
    res.status(500).json({
        message: message
    });
}

router.post('/usermessages', (req, res) => {
    databaseHandler.getMessages(req.body.senderId, req.body.recieverId)
        .then(messages => {
            databaseHandler.updateMessages(req.body.senderId);
            res.status(200).json({
                messages
            });
        })
        .catch(err => {
            errorHandler(err, res);
        });
});

module.exports = {
    router
}