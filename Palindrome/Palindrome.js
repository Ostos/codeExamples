// PALINDROME METHODS USING RECURSION, LOOPS AND NATIVE METHODS

var pali = "12321";
var arr = pali.split("");

// RECURSION
function palindrome(pal,start,end){
	if(start > end) 
		return true;
	if(arr[start] == arr[end])
		return palindrome(pal, start + 1, end - 1);
	else
		return false;
}

// LOOP
function palindromeWithLoop(pal){
	var last = pal.length - 1;

	for(var i = 0; i < pal.length; i++){
		if(pal[i] == pal[last])
			last--;
		else
			return false;
	}
	return true;
}

// NATIVE METHODS
function palindromeWithNativeMethods(pal) {
	return pal === pal.split('').reverse().join('');
}

// RESULTS IN SPEED

var start = new Date();
for(var i = 0; i < 10000; i++)
	palindrome(arr,0,pali.length - 1);
var end = new Date();
console.log('Recursive: ' + (end - start));

start = new Date();
for(var i = 0; i < 10000; i++)
	palindromeWithLoop(pali);
end = new Date();
console.log('Loop: ' + (end-start));

start = new Date();
for(var i = 0; i < 10000; i++)
	palindromeWithNativeMethods(pali);
end = new Date();
console.log('Native methods: ' + (end-start));