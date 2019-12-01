const Room = require('./room.js');
const Player = require('./player.js');
var roomPool = [];

function cardGenerator(){
    let cards = []
    let piles = [[],[],[],[]]
	for(let i=0;i<4;i++){
		for(let j=1;j<=13;j++){
            cards.push([i,j]);
        }
    }
    cards.push([-1,-1]);
    cards.push([-1,-1]);
    let random = ()=> Math.abs(Math.ceil(Math.random()*55-1));
    let card;
    let r;
    for(i=0;i<=53;i++){
        do{
            r = random();
            card = cards[r];
            cards[r] = cards[r]===null ? null : []; 
        }while(card === null) 
        cards[r] = null;
        piles[i%4].push(card)
    }
    return piles;
}

module.exports = {
	Room: Room,
	Player: Player,
	roomPool: roomPool
};
