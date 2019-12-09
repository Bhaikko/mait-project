const {
    getUser,
    addUser,
    updatePassword,
    getPasswordHash
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
    updateDatingProfile,
    setMainProfilePhoto,
    getCompleteProfile
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
    updateDatingProfile,
    setMainProfilePhoto,
    updatePassword,
    getPasswordHash,
    getCompleteProfile
}