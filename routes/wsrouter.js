
function wsrouter(io) {
    var router = require('express').Router();
    io.on('connection', function(socket) { 
        socket.emit("connection created!");
    });
    io.on('disconnect', function(socket) { 
        socket.emit("disconnect");
    });

    return router;
}



module.exports = wsrouter;