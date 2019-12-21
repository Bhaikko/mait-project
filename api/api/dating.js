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
            } catch(err) {
                console.log("File not found");
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

    if (!req.user) {
        res.status(401).json({
            message: 'Unauthorized'
        });
    } else {
        databaseHandler.updateDatingProfile(req.user.id, req.body.about, req.body.relationshipStatus, req.body.intrestedIn, req.body.age, req.body.collegeName, req.body.gender)
            .then(response => {
                res.status(200).json({
                    message: "Dating Profile updated successfully"
                });
            })
            .catch(err => {
                errorHandler(err, res);
            });
    }

});

router.get('/profile/:id', (req, res, next) => {

    databaseHandler.getCompleteProfile(req.params.id)
        .then(profile => {
            res.send(profile.get());
        })
        .catch(err => {
            errorHandler(err, res);
        });
});

router.post('/report', (req, res, next) => {
    if (!req.user) {
        res.status(401).json({
            message: "Unauthorized"
        });
    } else {

        databaseHandler.addReport(req.body.report, req.user.id, req.body.reportForId)
            .then(response => {
                res.status(201).json({
                    message: "Thank you for submitting report"
                });
            })
            .catch(err => {
                errorHandler(err, res);
            });
    }
});

// Explore Algorithm

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
}

const searchUser = (users, userId) => {
    let start = 0;
    let end = users.length - 1;

    while (start <= end) {
        let mid = (end + start) / 2;
        if (users[mid].id === userId) {
            return users[mid];
        } else if (userId <= users[mid].id) {
            end = mid - 1; 
        } else {
            start = mid + 1;
        }
    }
}

const getRandomuser = (users, currentUser) => {
    const randomId = getRandomInt(users.length) % users.length;

    const selectedUser = searchUser(users, randomId);
    if (!selectedUser) {
        return getRandomuser(users, currentUser);
    }
    const selecteduserGender = selectedUser.datingProfile.get().gender === "Male" ? "Men" : "Women";


    if (currentUser.datingProfile.get().intrestedIn === selecteduserGender) {
        return selectedUser;
    } else {
        return getRandomuser(users, currentUser);
    }
}

const calculateTagPercentage = (selectedUserTags, currentUserTags) => {
    selectedUserTags = databaseParser(selectedUserTags);
    currentUserTags = databaseParser(currentUserTags);

    let matchesCount = 0;
    const matchedTags = [];
    for (let i = 0; i < selectedUserTags.length; i++) {
        for (let j = 0; j < currentUserTags.length; j++) {
            if (selectedUserTags[i].tag === currentUserTags[j].tag) {
                matchesCount++;
                matchedTags.push(selectedUserTags[i]);
                break;
            }
        }
    }
    const result = {
        percentage: Math.ceil((matchesCount / selectedUserTags.length) * 100),
        matchedTags
    }

    return result;
}


router.get("/explore", (req, res, next) => {
    databaseHandler.getAllUsers()
        .then(users => {
            users = databaseParser(users);
            
            const currentUser = searchUser(users, req.user.id);
            const selectedUser = getRandomuser(users, currentUser);

            const result = calculateTagPercentage(selectedUser.userTags, currentUser.userTags);
            res.status(200).json({
                selectedUser,
                matchedResult: result
            });
        })
        .catch(err => {
            errorHandler(err, res);
        });
});

router.post("/addMatch", (req, res, next) => {
    console.log(req.body);

    databaseHandler.addMatch(req.user.id, req.body.userId)
        .then(response => {
            res.status(201).json({
                message: "You Liked"
            });
        })
        .catch(err => {
            errorHandler(err, res);
        });
});

module.exports = {
    router
}

