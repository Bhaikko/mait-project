const { Op } = require('sequelize');

const { Messages } = require('./database');
const { databaseParser } = require('./../api/utility');

module.exports.addMessage = (senderId, recieverId, time, message) => {
    return Messages.create({
        senderId,
        recieverId,
        time,
        message
    });
}

module.exports.getMessages = (senderId, recieverId) => {
    return Messages.findAll({
        where: {
            senderId: {
                [Op.or]: [senderId, recieverId]
            },
            recieverId: {
                [Op.or]: [senderId, recieverId]
            }
        }
    });
}

module.exports.markRead = messageId => {
    return Messages.update({
        where: {
            id: messageId
        }
    });
}
