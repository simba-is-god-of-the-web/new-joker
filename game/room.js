const uuid = require("uuid/v4")
const Player = require('./player.js');

class Room{
	constructor(name){
		this.id = random();
		this.name = name || this.id;
		this.players = [];
	}
	addPlayer(player){ // player <-- player object
		if(this.players.includes(player)){
			return new Error('Player already in this room');
		}
		if(this.players.length >= 4){
			return new Error('There are too many player in this room');
		}
		if(player instanceof Player) this.players.push(player);
		return this;
	}
	removePlayer(player){ // player <-- player object or name(begin with '%'), id(begin with '#') ws object
		if(typeof player === 'object'){
			if(player instanceof Player){
				this.players = this.players.filter((item)=>item !== player);
			}else{
				this.players = this.players.filter((item)=>item.ws !== player);
			}
		}else{
			if(player.charAt(0) === '%'){
				this.players = this.players.filter((item)=>item.name !== player.slice(1));
			}else if(player.charAt(0) === '#'){
				this.players = this.players.filter((item)=>item.id !== player.slice(1));
			}
		}
		return this;
	}
}

module.exports = Room;
