module.exports = function(io) {
    var app = require('express');
    var router = app.Router();

    io.on('connection', function(socket) { 
        socket.emit("broadcast","new connection");
    });

    return router;
}