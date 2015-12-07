// RECURSION
function fibonacci(position){
	
	if(position == 0 || position == 1)
		return 1;
	else
		return fibonacci(position - 1) + fibonacci(position - 2);
}

// LOOP
function fibonacciWithLoop(position){
	var total = 0;
	var back = 1;
	var next = 1;
	for(var i = 0 ; i < position; i++){
		if(i >= 1){
			total = back + next;
			next = back;
			back = total;
		}
	}
	return total;
}

var start = new Date();
for(var i = 0; i < 10000; i++){
	fibonacci(8);
}
var end = new Date();
console.log(end - start);

start = new Date();
for(var i = 0; i < 10000; i++){
	fibonacciWithLoop(8);
}
end = new Date();
console.log(end - start);


