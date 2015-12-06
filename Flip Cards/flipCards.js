window.onload = function(){
	var currentCards = [];
	var beingChecked = true;

	//Add event Listeners to all cards
	var cards = document.getElementsByClassName("card");
	for(var i = 0; i < cards.length ; i++)
		cards[i].addEventListener("click", click);

	//When a card is clicked, remove the "down" class
	function click(event){
		if(beingChecked){
			var elem = event.target;
			if(elem.classList.contains("down")){
				elem.classList.remove("down");
				currentCards.push(elem);
			//When two cards are clicked, check if they are equal
			if(currentCards.length == 2){
				checkForEquality();
			}
		}
	}
}

	//Checks if the two cards are equal
	function checkForEquality(){
		beingChecked = false;
		setTimeout(function(){
			if(currentCards[0].classList[1] == currentCards[1].classList[1]){
				currentCards[0].removeEventListener("click", click);
				currentCards[1].removeEventListener("click", click);
				currentCards[0].classList.add("ready");
				currentCards[1].classList.add("ready");
			}else{
				currentCards[0].classList.add("down");
				currentCards[1].classList.add("down");
			}
			currentCards.pop();
			currentCards.pop();
			beingChecked = true;
		},1000);
	}

}