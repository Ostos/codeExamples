window.onload = function(){

	var rotX = 0;
	var rotY = 0;
	var buttons = document.getElementsByTagName("button");
	var cube = document.getElementById("cube");

	buttons[0].addEventListener("click", rotateLeft);
	buttons[1].addEventListener("click", rotateRight);
	buttons[2].addEventListener("click", rotateTop);
	buttons[3].addEventListener("click", rotateBottom);

	function rotateLeft(){
		rotY -= 90;
		rotateCube();
	}

	function rotateRight(){
		rotY += 90;
		rotateCube();
	}

	function rotateTop(){
		rotX += 90;
		rotateCube();
	}

	function rotateBottom(){
		rotX -= 90;
		rotateCube();
	}

	function rotateCube(){
		cube.style.transform = "rotateX(" + rotX + "deg) rotateY(" + rotY + "deg)";
	}

}