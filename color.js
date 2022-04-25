var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var goalColor = pickColor();

var h1 = document.querySelector("h1");
var messages = document.querySelector("#message");
var resetButton = document.querySelector("#reset");

var colorDisplay = document.getElementById('colorDisplay');
colorDisplay.textContent = goalColor;

var easyButton = document.querySelector("#easyButton");
var hardButton = document.querySelector("#hardButton");

easyButton.addEventListener("click",function(){
	hardButton.classList.remove("selected");
	easyButton.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	goalColor = pickColor();
	colorDisplay.textContent = goalColor;

	for(var i=0; i < squares.length; i++){
		if (colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
});

hardButton.addEventListener("click",function(){
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	goalColor = pickColor();
	colorDisplay.textContent = goalColor;

	for(var i=0; i < squares.length; i++){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
	}
});


for (var i=0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;

		if (clickedColor === goalColor){
			message.textContent = "Correct!"
			resetButton.textContent = "Play again?"
			changeColor(clickedColor);
			h1.style.backgroundColor = clickedColor;
		}
		else{
			this.style.backgroundColor = "#232323";
			message.textContent = "Try again!";
		}
	});
}


resetButton.addEventListener("click", function(){
	colors = generateRandomColors(numSquares);
	goalColor = pickColor();
	colorDisplay.textContent = goalColor;
	message.textContent = "";
	this.textContent = "new colors"
	for(var i =0; i <  squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
})

function changeColor(color){
	for (var i = 0; i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for (var i = 0; i < num; i++){
		arr.push(randomColors());
	}
	return arr;
}

function randomColors(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}