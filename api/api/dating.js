const express = require("express");
const multer = require("multer");
const fs = require('fs');

const databaseHandler = require("./../database/index");
const { databaseParser } = require('./utility');



const router = express.Router();
const upload = multer({
    dest: 'uploads/dating'  // if changing this, make sure to make changes in in unLinkFile() in router.delete('/profilephoto') 
});


router.get("/", (req, res, next) => {
    res.send("Dating Router Working");
});

const errorHandler = (error, res, message = "Something Went wrong") => {
    console.log(error);
    res.status(500).json({
        message: message
    });
}

router.get("/tags", (req, res, next) => {
    databaseHandler.getTags()
        .then(tags => {
            tags = databaseParser(tags);
            res.status(200).send(tags);
        })
        .catch(err => {
            errorHandler(err, res);
        });
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
                errorHandler(err, res);
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
                errorHandler(err, res);
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
                errorHandler(err, res);
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
                errorHandler(err, res);
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
            errorHandler(err, res);
        });
});


router.delete('/profilephoto', (req, res, next) => {
    databaseHandler.deleteProfilePhoto(req.user.id, req.body.photo.id)
        .then(response => {
            try {
                fs.unlinkSync(__dirname + "/../" + req.body.photo.imageUrl);
            } finally {
                
                res.status(200).json({
                    message: "Profile Photo Deleted Successfully"
                });
            }
        })
        .catch(err => {
            errorHandler(err, res);
        });

});

router.put('/profilephoto', (req, res, next) => {
    databaseHandler.setMainProfilePhoto(req.user.id, req.body.id)
        .then(response => {
            res.status(200).json({
               message: "Profile Photo Changed Successfully" 
            });
        })
        .catch(err => {
            errorHandler(err, res);
        });
});

router.get('/datingprofile/:id', (req, res, next) => {
    databaseHandler.getDatingProfile(req.params.id)
        .then(response => {
            res.send(response.get());
        })
        .catch(err => {
            errorHandler(err, res);
        });
});

router.put('/datingprofile', (req, res, next) => {
    console.log(req.body);

    res.send(200);
})

module.exports = {
    router
}