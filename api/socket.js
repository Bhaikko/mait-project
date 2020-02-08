const { addMessage, getMessages, markRead }  = require('./database/index')


const socket = (io, redis) => {
    io.on('connection', socket => {
        socket.on('connectToChat', data => {
            redis.set(data.userId, socket.id);
        });

        socket.on('disconnectMe', data => {
            redis.del(data.userId);
        });

        socket.on('sendMessage', data => {
            redis.get(data.recieverId, (err, recieverSocketId) => {
                if (recieverSocketId) {
                    io.to(recieverSocketId).emit('recieveMessage', {
                        message: data.message,
                        senderId: data.senderId,
                        recieverId: data.recieverId
                    });
                }
            });

            addMessage(data.senderId, data.recieverId, new Date(), data.message);
        });

    });
}

module.exports = {
    socket
}