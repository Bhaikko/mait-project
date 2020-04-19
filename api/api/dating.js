const express = require("express");
const multer = require("multer");
const fs = require('fs');

const databaseHandler = require("./../database/index");
const { databaseParser } = require('./utility');

const router = express.Router();
const upload = multer({
    dest: 'uploads/dating'  // if changing this, make sure to make changes in in unLinkFile() in router.delete('/profilephoto') 
});


router.get("/", (req, res) => {
    res.send("Dating Router Working");
});


const errorHandler = (error, res, message = "Something Went wrong") => {
    console.log(error);
    res.status(500).json({
        message: message
    });
}

router.get("/tags", (req, res) => {
    databaseHandler.getTags()
        .then(tags => {
            tags = databaseParser(tags);
            res.status(200).send(tags);
        })
        .catch(err => {
            errorHandler(err, res);
        });
});

router.post("/usertag", (req, res) => {
    if (!req.user) {
        res.status(401).json({
            message: "Unauthorized"
        });
    } else {
        const tag = req.body.tag.toLowerCase();
        databaseHandler.addTag(tag)
            .then(response => {
                databaseHandler.addUserTag(req.user.id, tag)
                    .then(response => {
                        if (response[1]) {
                            const tag = {
                                id: response[0].id,
                                tag: response[0].tag
                            }
                            res.status(201).json({
                                tag: tag,
                                message: "Tag Added Successfully"
                            }); 
                        } else {
                            res.status(400).json({
                                message: "Tag Already Exist"
                            });
                        }
                    })
            })
            .catch(err => {
                errorHandler(err, res);
            });
    }
});

router.get("/usertag/:id", (req, res) => {
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

router.delete("/usertag", (req, res) => {
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

router.post('/profilephoto', upload.single('profilePhoto'), (req, res) => {
    if (!req.user) {
        res.status(401).json({
            message: 'Unauthorized'
        });
    } else {

        databaseHandler.addProfilePhoto(req.user.id, req.file.path)
            .then(response => {
                const newPhoto = {
                    id: response.id,
                    imageUrl: response.imageUrl,
                    main: response.main
                };

                res.status(201).json({
                    photo: newPhoto,
                    message: "Photo Added Successfully"
                });

            })
            .catch(err => {
                errorHandler(err, res);
            });
    }
});

router.get('/profilephoto/:id', (req, res) => {
    databaseHandler.getProfilePhotos(req.params.id)
        .then(photos => {
            photos = databaseParser(photos);
            res.status(200).send(photos);
        })
        .catch(err => {
            errorHandler(err, res);
        });
});


router.delete('/profilephoto', (req, res) => {
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

router.put('/profilephoto', (req, res) => {
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

router.get('/datingprofile/:id', (req, res) => {
    databaseHandler.getDatingProfile(req.params.id)
        .then(response => {
            res.send(response.get());
        })
        .catch(err => {
            errorHandler(err, res);
        });
});

router.put('/datingprofile', (req, res) => {
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

router.get('/profile/:id', (req, res) => {

    databaseHandler.getCompleteProfile(req.params.id)
        .then(profile => {

            res.send(profile);
        })
        .catch(err => {
            errorHandler(err, res);
        });
});

router.post('/report', (req, res) => {
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

const getRandomInt = userIdsArray => {
    const max = userIdsArray.length;
    const randomIndex = Math.floor(Math.random() * Math.floor(max)) + 1;

    return userIdsArray[randomIndex];
}

const getRandomuser = async (userIdsArray, currentUser) => {
    const randomId = getRandomInt(userIdsArray);

    if (!randomId) {
        return getRandomuser(userIdsArray, currentUser);
    }

    const selectedUser = await databaseHandler.getDatingProfile(randomId);

    const selecteduserGender = selectedUser.get().gender === "Male" ? "Men" : "Women";

    if (currentUser.get().intrestedIn === selecteduserGender) {
        return randomId;
    } else {
        return getRandomuser(userIdsArray, currentUser);
    }
}

const calculateTagPercentage = (selectedUserTags, currentUserTags) => {

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
        percentage: Math.ceil((matchesCount / selectedUserTags.length) * 100) || 0,
        matchedTags
    }

    return result;
}


router.get("/explore", (req, res) => {
    databaseHandler.getAllUserIds(req.user.id)
        .then(async users => {
            let userIDs = databaseParser(users);
            const userIdsArray = [];
            userIDs.map(current => {
                userIdsArray.push(current.id);
            });
            

            const currentUser = await databaseHandler.getDatingProfile(req.user.id);
            const selectedUserId = await getRandomuser(userIdsArray, currentUser);

            const selectedUserCompleteProfile = await databaseHandler.getCompleteProfile(selectedUserId);
            const selectedUserTags = selectedUserCompleteProfile.userTags;
            const currentUserTags = databaseParser(await databaseHandler.getUserTags(currentUser.id));

            const result = calculateTagPercentage(selectedUserTags, currentUserTags);
            
            res.status(200).json({
                selectedUserCompleteProfile,
                matchedResult: result
            });
        })
        .catch(err => {
            errorHandler(err, res);
        });
});

class Socket {
    constructor(io, redis) {
        this.io = io;
        this.redis = redis;
    }
}
var newSocket;
const notificationSocket = (io, redis) => {
    newSocket = new Socket(io, redis);
}

router.post("/addMatch", (req, res) => {
    databaseHandler.getMatch(req.body.userId, req.user.id)
        .then(response => {
            if (!response) {
                databaseHandler.addMatch(req.user.id, req.body.userId)
                    .then(response => {
                        res.status(201).json({
                            message: "You Liked"
                        });
                    });
            } else {
                databaseHandler.addToContact(req.user.id, req.body.userId)
                    .then(async response => {
                        res.status(200).json({
                            message: "Also Likes You"
                        });
                        
                        const user = await databaseHandler.getUsername(req.user.id);
                        const profilePhoto = await databaseHandler.getMainProfilePhoto(req.user.id);

                        const newNotification = {
                            title: "A New Match!!!",
                            message: `${user.username} Also Likes You.`,
                            image: profilePhoto ? profilePhoto.imageUrl : "",
                            time: new Date(),
                            userId: req.body.userId
                        };

                        databaseHandler.addNotification(
                            newNotification.title,
                            newNotification.message,
                            newNotification.image,
                            newNotification.time,
                            newNotification.userId
                        )
                            .then(response => {
                                // console.log(newSocket);                                
                                newSocket.redis.get(newNotification.userId, (err, socketId) => {
                                    if (socketId && response !== undefined) {
                                        newSocket.io.to(socketId).emit(`newNotification`, response);
                                    }
                                });
                            });

                    });
            }
        })
        .catch(err => {
            errorHandler(err, res);
        });
});

router.get('/getContacts', (req, res) => {
    databaseHandler.getContactsIds(req.user.id)
        .then(response => {
            const contacts = databaseParser(response);
            const contactIds = [];
            contacts.map(contact => contactIds.push(contact['userId1'] || contact['userId2']));

            databaseHandler.getUnreadNotification(req.user.id)
                .then(notifficationResponse => {
                    databaseHandler.getContacts(contactIds)
                        .then(response => {
                            res.status(200).json({
                                contacts: databaseParser(response),
                                notifications: notifficationResponse
                            });
                        });
                });
        })
        .catch(err => {
            errorHandler(err, res);
        });
});

router.post('/checkonline', (req, res) => {
    databaseHandler.checkOnline(req.body.userId)
        .then(response => {
            res.status(200).json({
                status: response
            })
        })
        .catch(err => {
            errorHandler(err, res);
        });
});

router.get('/notifications', (req, res) => {
    databaseHandler.getNotifications(req.user.id)
        .then(response => {
            res.status(200).json({
                notifications: response
            })
        })
        .catch(err => {
            errorHandler(err, res);
        });
});

router.delete('/notifications', (req, res) => {
    databaseHandler.deleteNotifications(req.user.id)
        .then(response => {
            res.sendStatus(200);
        })
        .catch(err => {
            errorHandler(err, res);
        });
});

router.get('/mainprofilePhoto', (req, res) => {
    databaseHandler.getMainProfilePhoto(req.user.id)
        .then(response => {
            res.status(200).json({
                photo: response
            });
        })
        .catch(err => {
            errorHandler(err, res);
        });
});

module.exports = {
    router,
    notificationSocket
}

