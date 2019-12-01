const uuid = require("uuid/v4")
class Player{
	constructor(ws, name){
		if(ws && name){
			this.id = uuid();
			this.name = name || this.id;
			this.ws = ws;
			this.cards = [];
		}else{
			return new Error('Miss some argements');
        }
    }
    throwCard(){
        for(i in this.cards){
            
        }
    }
}

module.exports = Player;
