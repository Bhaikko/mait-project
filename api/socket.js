const socket = io => {
    io.on('connection', socket => {
        console.log(socket);
    });
}

module.exports = {
    socket
}