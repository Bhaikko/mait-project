
const socket = (io, redis) => {
    io.on('connection', socket => {
        socket.on('connectToChat', data => {
            console.log(data.userId, socket.id);

            redis.set(data.userId, socket.id);

            redis.get(1, (err, reply) => {
                console.log(reply);
            });
        });

        socket.on('disconnect', data => {
            console.log("user disconnected");
        })

        socket.on('disconnectMe', data => {
            console.log('Loggin out');
            console.log(data);
        });
    });
}

module.exports = {
    socket
}