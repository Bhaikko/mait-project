const { 
    addMessage,  
    markRead,
    makeOffline,
    makeOnline,
    addNotification,
    getUsername,
    getMainProfilePhoto
}  = require('./database/index')


const {
    notificationSocket
} = require('./api/dating');

const socket = (io, redis) => {
    io.on('connection', socket => {
        socket.on('connectToChat', data => {
            redis.set(data.userId, socket.id);
            makeOnline(data.userId);

            socket.broadcast.emit(`user${data.userId}online`, {
                userId: data.userId
            });
        });

        socket.on('disconnectMe', data => {
            redis.del(data.userId);
            const time = new Date().toLocaleString();
            makeOffline(data.userId);

            socket.broadcast.emit(`user${data.userId}offline`, {
                time: time,
                userId: data.userId
            });
        });

        socket.on('sendMessage', data => {
            redis.get(data.recieverId, (err, recieverSocketId) => {
                addMessage(data.senderId, data.recieverId, new Date(), data.message)
                    .then(async message => {
                        message = message.get();

                        if (recieverSocketId) {
                            const newMessage = {
                                id: message.id,
                                message: message.message,
                                senderId: message.senderId,
                                recieverId: message.recieverId,
                                time: message.time
                            };
                            io.to(recieverSocketId).emit('recieveMessage', newMessage);
                        } 

                        const user = await getUsername(message.senderId);
                        const profilePhoto = await getMainProfilePhoto(message.senderId);
                        const messageContent = message.message;
                        const newNotification = {
                            title: `${user.username} texted you while you were away.`,
                            message: messageContent.length < 20 ? messageContent : messageContent.slice(0, 20) + '...',
                            image: profilePhoto ? profilePhoto.imageUrl : "",
                            time: new Date(),
                            userId: message.recieverId
                        }

                        addNotification(
                            newNotification.title,
                            newNotification.message,
                            newNotification.image,
                            newNotification.time,
                            newNotification.userId
                        )
                            .then(response => {
                                if (recieverSocketId && response !== undefined) {
                                    io.to(recieverSocketId).emit('newMessageNotification', response);
                                }
                            });
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
        
        notificationSocket(io, redis);
    });
}

module.exports = {
    socket
}