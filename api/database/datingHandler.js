const { 
    DatingProfiles, 
    ProfilePhotos, 
    UserTags, 
    Matches, 
    Tags, 
    Users,
    Reports,
    Contacts,
    Notifications
} = require('./database');
const { Op } = require('sequelize');

module.exports.getDatingProfile = userId => {
    return DatingProfiles.findOne({
        where: {
            userId 
        },
        attributes: ['id', 'about', 'relationshipStatus', 'intrestedIn', 'age', 'collegeName']
    });
}

module.exports.updateDatingProfile = (userId, about, relationshipStatus, intrestedIn, age, collegeName, gender) => {
    return DatingProfiles.update(
        {
            about,
            relationshipStatus,
            intrestedIn,
            age,
            collegeName,
            gender
        },
        {
            where: {
                userId 
            }
        }
    );
}

module.exports.addProfilePhoto = (userId, imageUrl) => {
    return ProfilePhotos.create({
        userId,
        imageUrl
    });
}

module.exports.deleteProfilePhoto = (userId, id) => {
    return ProfilePhotos.destroy({
        where: {
            userId,
            id 
        }
    });
}

module.exports.getProfilePhotos = userId => {
    return ProfilePhotos.findAll({
        where: {
            userId 
        },
        attributes: ['id', 'imageUrl', 'main', 'userId']
    });
}

module.exports.addUserTag = (userId, tag) => {
    return UserTags.findOrCreate({
        where: {
            userId, 
            tag
        }
    });
}

module.exports.deleteUserTag = (userId, id) => {
    return UserTags.destroy({
        where: {
            userId,
            id 
        }
    });
}

module.exports.getUserTags = userId => {
    return UserTags.findAll({
        where: {
            userId 
        },
        attributes: ['id', 'tag']
    });
}

module.exports.addMatch = (likerId, likeeId) => {
    return Matches.findOrCreate({
        where: {
            likerId,
            likeeId
        }
    });
}

module.exports.getMatch = (likerId, likeeId) => {
    return Matches.findOne({
        where: {
            likerId,
            likeeId 
        }
    });
}


module.exports.addTag = tag => {
    return Tags.create({
        tag
    });
}

module.exports.getTags = () => {
    return Tags.findAll({
        attributes: ['id', 'tag']
    });
}

module.exports.setMainProfilePhoto = (userId, photoId) => {
    return ProfilePhotos.update(
        {
            main: false 
        },
        {
            where: {
                userId 
            }
        }
    )
        .then(response => {
            return ProfilePhotos.update(
                {
                    main: true 
                },
                {
                    where: {
                        userId,
                        id: photoId 
                    }
                }
            )
            
        });  
}

module.exports.getCompleteProfile = userId => {
    return Users.findOne({
        where: {
            id: userId 
        },
        attributes: ['id', 'name', 'username'],
        include: [
            {
                model: DatingProfiles,
                attributes: ['id', 'about', 'relationshipStatus', 'intrestedIn', 'age', 'collegeName', 'gender']
            },
            {
                model: UserTags,
                attributes: ['id', 'tag']
            },
            {
                model: ProfilePhotos,
                attributes: ['id', 'imageUrl', 'main']
            }
        ]
    });
}

module.exports.getAllUsers = () => {
    return Users.findAll({
        attributes: ['id', 'name', 'username'],
        include: [
            {
                model: DatingProfiles,
                attributes: ['id', 'about', 'relationshipStatus', 'intrestedIn', 'age', 'collegeName', 'gender']
            },
            {
                model: UserTags,
                attributes: ['id', 'tag']
            },
            {
                model: ProfilePhotos,
                attributes: ['id', 'imageUrl', 'main']
            }
        ],
        order: [
            ['id', 'ASC']
        ]
    });
}

module.exports.addReport = (report, submittedById, reportForId) => {
    return Reports.findOne({
        where: {
            submittedById,
            reportForId
        }
    })
        .then(data => {
            if (data) {
                return null;
            }
            return Reports.create({
                submittedById,
                reportForId,
                report 
            });
        });
}

module.exports.addToContact = (userId1, userId2) => {
    return Contacts.findOrCreate({
        where: {
            userId1,
            userId2
        }
    });
}

module.exports.getContactsIds = (userId) => {
    
    return Promise.all([
        Contacts.findAll({
            where: {
                userId1: userId
            },
            attributes: ['userId2']
        }),
        Contacts.findAll({
            where: {
                userId2: userId
            },
            attributes: ['userId1']
        })
    ])
        .then(response => {
            const contactIds = [...response[0], ...response[1]];
            return contactIds;
        })
}



module.exports.getContacts = (userIds) => {
    return Users.findAll({
        where: {
            id: {
                [Op.in]: userIds
            }
        },
        attributes: ['id', 'name'],
        include: [
            {
                model: ProfilePhotos,
                attributes: ['id', 'imageUrl', 'main']
            },
            {
                model: DatingProfiles,
                attributes: ['lastSeen']
            }
        ]
    });
}

module.exports.makeOffline = userId => {
    const time = new Date().toLocaleString([], {
        hour: '2-digit',
        minute: '2-digit',
        day: '2-digit',
        month: '2-digit',
        year: '2-digit'
    });
    return DatingProfiles.update(
        {
            lastSeen: time
        },
        {
            where: {
                userId
            }
        }
    );
}

module.exports.makeOnline = userId => {
    return DatingProfiles.update(
        {
            lastSeen: "Online"
        },
        {
            where: {
                userId
            }
        }
    );
}

module.exports.checkOnline = userId => {
    return DatingProfiles.findOne({
        where: {
            userId
        },
        attributes: ['lastSeen']
    });
}

module.exports.addNotification = (title, message, imageUrl, time, userId) => {
    return Notifications.findOne({
        where: {
            title,
            userId
        }
    })
        .then(notification => {
            if (notification) {
                return;
            } else {
                return Notifications.create({
                    title,
                    message,
                    imageUrl,
                    time,
                    userId
                });
            }
        });
}

module.exports.deleteNotifications = userId => {
    return Notifications.destroy({
        where: {
            userId
        }
    });
}

module.exports.getNotifications = userId => {
    return Notifications.findAll({
        where: {
            userId
        }
    });
}

module.exports.getUsername = userId => {
    return Users.findOne({
        where: {
            id: userId
        },
        attributes: ['username']
    });
}

module.exports.getMainProfilePhoto = userId => {
    return ProfilePhotos.findOne({
        where: {
            id: userId,
            main: true
        },
        attributes: ['imageUrl']
    });
}