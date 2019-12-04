const {room,player} = require('../game/game');
var rooms = []
function wsrouter(io) {
    var router = require('express').Router();
    // io.on('connection', function(socket) { 
    //     socket.emit("connection created!");
    //     socket.on("create room",()=>{
    //         rooms.push(new room())
    //     });
    // });



    // io.on('disconnect', function(socket) { 
    //     socket.emit("disconnect");
    // });


    return router;
}



module.exports = wsrouter;