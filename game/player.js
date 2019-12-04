const uuid = require("uuid/v4")
class Player{
	constructor(name){
		if(name){
			this.id = `#${uuid()}`;
			this.name = name || this.id;
			// this.ws = ws;
			this.cards = [];
		}else{
			return new Error('Miss some argements');
        }
    }
}

module.exports = Player;
