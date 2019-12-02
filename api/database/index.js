const {
    getUser,
    addUser
} = require("./authHandler");


const {
    addMatch,
    addProfilePhoto,
    addTag,
    addUserTag,
    deleteProfilePhoto,
    deleteUserTag,
    getDatingProfile,
    getMatch,
    getProfilePhotos,
    getTags,
    getUserTags,
    updateDatingProfile
} = require("./datingHandler");

module.exports = {
    getUser,
    addUser,
    addMatch,
    addProfilePhoto,
    addTag,
    addUserTag,
    deleteProfilePhoto,
    deleteUserTag,
    getDatingProfile,
    getMatch,
    getProfilePhotos,
    getTags,
    getUserTags,
    updateDatingProfile
}