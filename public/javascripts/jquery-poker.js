;
class Poker{
	constructor(suit = 0, num = 1){
		this.suit = suit;
		this.number = num;
	}
}

class PokerCards{
	constructor(){
		this.pool = [];
	}
	
	add(card){
		if(card instanceof Poker){
			this.pool.push(card);
			return 0;
		}else{
			return new Error('card must be Poker');
		}
	}

	remove(card){
		if(!(card instanceof Poker)){
			return new Error('card must be Poker');
		}else if(!this.pool.includes(card)){
			return new Error('card must in pool');
		}
	}
}
const suit = ['♠', '♥', '♦', '♣',];
function pokerNum(n){
	switch(n){
		case 1:
			return 'A';
		case 11:
			return 'J';
		case 12:
			return 'Q';
		case 13:
			return 'K';
		default:
			return n;
	}
}
(function($){
	var cardExample = $('.card').eq(0);
	var pg = $('#playground');
	cardExample.remove();
	$.fn.pokerPrint = function(card){
		if(!(card instanceof Poker)){
			return this;
		}
		pg.append(cardExample.clone()
			.find('.suit').text(suit[card.suit]).end()
			.find('.number').text(pokerNum(card.number)).end()
		);
		
		return this;
	}
})(jQuery);
console.log('poker loded');
