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
    let random = ()=> Math.abs(Math.ceil(Math.random()*54-1));
    let card;
    let r;
    for(i=0;i<=52;i++){
        do{
            r = random();
            card = cards[r];
            cards[r] = cards[r] === null ? null : []; 
        }while(card === null) 
        cards[r] = null;
        piles[i%4].push(card)
    }
    return piles;
}
function over(room){
    let over=0;
    let zeroNum=0,nonZero=[];
    for(let i=0;i<room.players.length;i++){
        if(room.players[i].cards > 0){
            nonZero.push(i);
        }else{
            zeroNum++;
        }
    }
    if(zeroNum === 3){
        console(oom.players[nonZero[0]].cards[0]);
        return nonZero[0] 
    }
}
game = {
    cardGenerator:cardGenerator,
    gameOver:over
}

module.exports = {
    main:game,
	Room: Room,
	Player: Player,
	roomPool: roomPool
};
