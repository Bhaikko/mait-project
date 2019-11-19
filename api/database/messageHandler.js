const { Messages } = require('./database');
const { databaseParser } = require('./utility');

const addMessage = (senderId, recieverId, time, message) => {
    return Messages.create({
        senderId,
        recieverId,
        time,
        message
    })
        .then(response => response)
        .catch(err => { throw err; });
}

const getMessages = (senderId, recieverId) => {
    return Messages.findAll({
        where: {
            senderId,
            recieverId
        }
    })
        .then(response => databaseParser(response))
        .catch(err => { throw err; });
}

module.exports = {
    addMessage,
    getMessages
}