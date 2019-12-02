const { DatingProfiles, ProfilePhotos, UserTags, Matches, Tags } = require('./database');

const updateDatingProfile = (userId, about, relationshipStatus, intrestedIn, age, collegeName) => {
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

const getDatingProfile = userId => {
    return DatingProfiles.findOne({
        where: {
            userId 
        }
    });
}

const addProfilePhoto = (userId, imageUrl) => {
    return ProfilePhotos.create({
        userId,
        imageUrl
    });
}

const deleteProfilePhoto = (userId, id) => {
    return ProfilePhotos.destroy({
        where: {
            userId,
            id 
        }
    });
}

const getProfilePhotos = userId => {
    return ProfilePhotos.findAll({
        where: {
            userId 
        }
    });
}

const addUserTag = (userId, tag) => {
    return UserTags.create({
        userId,
        tag 
    });
}

const deleteUserTag = (userId, id) => {
    return UserTags.destroy({
        where: {
            userId,
            id 
        }
    });
}

const getUserTags = userId => {
    return UserTags.findAll({
        where: {
            userId 
        }
    });
}

const addMatch = (userId1, userId2) => {
    return Matches.create({
        userId1,
        userId2
    });
}

const getMatch = (userId1, userId2) => {
    return Matches.findOne({
        where: {
            userId1,
            userId2 
        }
    });
}

const addTag = tag => {
    return Tags.create({
        tag
    });
}

const getTags = () => {
    return Tags.findAll();
}

// const getContacts = userId => {
//     return Matches.findAll({
//         where: {
//             userId1: userI
//         }
//     })
// }

module.exports = {
    updateDatingProfile,
    getDatingProfile,
    addProfilePhoto,
    deleteProfilePhoto,
    getProfilePhotos,
    addUserTag,
    deleteUserTag,
    getUserTags,
    addMatch,
    getMatch,
    addTag,
    getTags
}