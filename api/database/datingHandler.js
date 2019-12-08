const { DatingProfiles, ProfilePhotos, UserTags, Matches, Tags } = require('./database');

module.exports.getDatingProfile = userId => {
    return DatingProfiles.findOne({
        where: {
            userId 
        },
        attributes: ['id', 'about', 'relationshipStatus', 'intrestedIn', 'age', 'collegeName']
    });
}

module.exports.updateDatingProfile = (userId, about, relationshipStatus, intrestedIn, age, collegeName) => {
    console.log(relationshipStatus);
    return DatingProfiles.update(
        {
            about,
            relationshipStatus,
            intrestedIn,
            age,
            collegeName
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

module.exports.addMatch = (userId1, userId2) => {
    return Matches.create({
        userId1,
        userId2
    });
}

module.exports.getMatch = (userId1, userId2) => {
    return Matches.findOne({
        where: {
            userId1,
            userId2 
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


// module.exports.getContacts = userId => {
//     return Matches.findAll({
//         where: {
//             userId1: userI
//         }
//     })
// }
