const express = require("express");
const multer = require("multer");

const databaseHandler = require("./../database/index");
const { databaseParser } = require('./utility');
// const { SERVER_URL } = require('./../enviroments');

const router = express.Router();
const upload = multer({
    dest: 'uploads/dating'
});


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
    if (!req.user) {
        res.status(401).json({
            message: "Unauthorized"
        });
    } else {
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
    }


});

router.get("/usertag/:id", (req, res, next) => {
    if (!req.user) {
        res.status(401).json({
            message: "Unauthorized"
        });
    } else {
        databaseHandler.getUserTags(req.params.id)
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
    }

});

router.delete("/usertag", (req, res, next) => {
    if (!req.user) {
        res.status(401).json({
            message: "Unauthorized"
        });
    } else {
        databaseHandler.deleteUserTag(req.user.id, req.body.tag.id)
            .then(response => {
                res.status(201).json({
                    message: "Tag Deleted Successfully"
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    message: "Something Went Wrong"
                })
            });
    }
});

router.post('/profilephoto', upload.single('profilePhoto'), (req, res, next) => {
    if (!req.user) {
        res.status(401).json({
            message: 'Unauthorized'
        });
    } else {

        databaseHandler.addProfilePhoto(req.user.id, req.file.path)
            .then(response => {
                databaseHandler.getProfilePhotos(req.user.id)
                    .then(photos => {
                        photos = databaseParser(photos);
                        res.status(201).json({
                            message: "Profile Photo Added",
                            photos: photos 
                        });
                    })
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    message: "Something Went Wrong"
                });
            });
    }
});

router.get('/profilephoto/:id', (req, res, next) => {
    databaseHandler.getProfilePhotos(req.params.id)
        .then(photos => {
            photos = databaseParser(photos);
            res.status(200).send(photos);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: "Something Went Wrong"
            });
        });
});

module.exports = {
    router
}