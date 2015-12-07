//DECORATOR PATTERN

function Mackbook(){
	this.cost = function(){
		return 300;
	};
}

function memory(m){
	var v = m.cost();
	m.cost = function(){
		return v + 50;
	};
}

function insurance(m){
	var v = m.cost();
	m.cost = function(){
		return v + 30;
	};
}

function addGuaranty(m){
	m.guaranty = function(){
		return "2 years";
	}
}

var mac = new Mackbook();
console.log(mac.cost());
memory(mac);
console.log(mac.cost());
insurance(mac);
console.log(mac.cost());

var mac2 = new Mackbook();
console.log(mac2.cost());
addGuaranty(mac2);
console.log(mac2.guaranty());