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
    getCompleteProfile,
    addReport,
    getAllUsers,
    addToContact,
    getContactsIds,
    getContacts,
} = require("./datingHandler");

const {
    addMessage,
    getMessages,
    markRead
} = require('./messageHandler');

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
    getCompleteProfile,
    addReport,
    getAllUsers,
    addToContact,
    getContactsIds,
    getContacts,
    addMessage,
    getMessages,
    markRead
};