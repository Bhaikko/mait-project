const { Messages } = require('./database');
const { databaseParser } = require('./utility');

module.exports.addMessage = (senderId, recieverId, time, message) => {
    return Messages.create({
        senderId,
        recieverId,
        time,
        message
    })
        .then(response => response)
        .catch(err => { throw err; });
}

module.exports.getMessages = (senderId, recieverId) => {
    return Messages.findAll({
        where: {
            senderId,
            recieverId
        }
    })
        .then(response => databaseParser(response))
        .catch(err => { throw err; });
}

module.exports.markRead = messageId => {
    return Messages.update(
        {
            where: {
                id: messageId
            }
        }
    );
}
