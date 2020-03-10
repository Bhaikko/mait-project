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
    makeOffline,
    makeOnline,
    checkOnline,
    addNotification,
    deleteNotifications,
    getNotifications,
    getUsername,
    getMainProfilePhoto
} = require("./datingHandler");

const {
    addMessage,
    getMessages,
    markRead,
    getUnreadNotification,
    updateMessages
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
    markRead,
    makeOffline,
    makeOnline,
    checkOnline,
    getUnreadNotification,
    updateMessages,
    getNotifications,
    addNotification,
    deleteNotifications,
    getUsername,
    getMainProfilePhoto
};