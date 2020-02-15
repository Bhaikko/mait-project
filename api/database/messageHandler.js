const { Op } = require('sequelize');
const Sequelize = require('sequelize');

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
        },
        sort: [
            ['time', 'ASC']
        ]
    });
}

module.exports.markRead = messageId => {
    return Messages.update({
        where: {
            id: messageId
        }
    });
}

module.exports.getUnreadNotification = userId => {
    return Messages.findAll({
        where: {
            recieverId: userId,
            seen: false
        },
        attributes: [
            [Sequelize.fn('DISTINCT', Sequelize.col('senderId')) ,'senderId'],
            'seen'
        ]
    });
        
}

module.exports.updateMessages = recieverId => {
    return Messages.update({
        seen: true
    }, {
        where: {
            recieverId
        }
    });
}

