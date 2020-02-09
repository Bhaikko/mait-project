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
                addMessage(data.senderId, data.recieverId, new Date(), data.message)
                    .then(message => {
                        if (recieverSocketId) {
                            message = message.get();
                            const newMessage = {
                                id: message.id,
                                message: message.message,
                                senderId: message.senderId,
                                recieverId: message.recieverId,
                                time: message.time
                            };
                            io.to(recieverSocketId).emit('recieveMessage', newMessage);
                        }
                    })
                    .catch(err => {
                        console.log(err);
                        if (recieverSocketId) {
                            io.to(recieverSocketId).emit('recieveMessage', {
                                error: 'Something Went Wrong!!!'
                            });
                        }
                    });
            });

        });

    });
}

module.exports = {
    socket
}