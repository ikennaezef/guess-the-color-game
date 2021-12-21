const code = document.querySelector('.color-code');
const newColor = document.querySelector('.new');
const color = document.querySelectorAll('.color');
const hBottom = document.querySelector('.h-bottom');
const newGame = document.querySelector('.n-game');
var colors = [color[0], color[1], color[2], color[3], color[4], color[5]];
const lives = document.querySelector('.lives');
const score = document.querySelector('.score');
let highScore = document.querySelector('.high-score');
const hs = document.querySelector('.hs');

lifeCount = 5;
scoreCount = 0;
hScore = 0;


// For creating a new selection of random colors
function randomize() {
	var a = Math.floor(Math.random()*250);
	var b = Math.floor(Math.random()*250);
	var c = Math.floor(Math.random()*250);
	var d = Math.floor(Math.random()*250);
	var e = Math.floor(Math.random()*250);
	var f = Math.floor(Math.random()*250);
	var g = Math.floor(Math.random()*250);
	var h = Math.floor(Math.random()*250);
	var i = Math.floor(Math.random()*250);
	var j = Math.floor(Math.random()*250);
	var k = Math.floor(Math.random()*250);
	var l = Math.floor(Math.random()*250);
	var m = Math.floor(Math.random()*250);
	var n = Math.floor(Math.random()*250);
	var o = Math.floor(Math.random()*250);
	var p = Math.floor(Math.random()*250);
	var q = Math.floor(Math.random()*250);
	var r = Math.floor(Math.random()*250);

	colors.sort(()=> 0.5 - Math.random());
	for (var i = 0; i < colors.length; i++) {
		colors[i].style.backgroundColor = 'white';
		colors[i].classList.remove('pick');
	}

	colors[2].style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
	colors[2].classList.add('pick');
	var pick = document.querySelector('.pick');
	pickCol = `rgb(${a}, ${b}, ${c})`;
	colors[0].style.backgroundColor = `rgb(${d}, ${e}, ${f})`;
	colors[1].style.backgroundColor = `rgb(${g}, ${h}, ${i})`;
	colors[3].style.backgroundColor = `rgb(${j}, ${k}, ${l})`;
	colors[4].style.backgroundColor = `rgb(${m}, ${n}, ${c})`;
	colors[5].style.backgroundColor = `rgb(${o}, ${p}, ${q})`;

	code.textContent = `RGB(${a}, ${b}, ${c})`;
}

newColor.addEventListener('click', randomize);

for (var i = 0; i < colors.length; i++) {
		colors[i].addEventListener('click', (e)=> {
			if (e.target.classList.contains('pick') ) { // If the player picks the correct answer
				scoreCount++;
				score.textContent = scoreCount;
				win();
			} else { // If the player picks the wrong answer
				if (lifeCount === 1) {gameOver()} // If the player is out of lives
				lifeCount--;
				lives.textContent = lifeCount;
				hBottom.style.backgroundColor = 'red';
				setTimeout('hBottom.style.backgroundColor = "#ddd"', 400);
			}
		})
	}

// Takes place when the player picks the correct answer
function win() {
	for (var i = 0; i < colors.length; i++) {
		colors[i].style.backgroundColor = pickCol;
		setTimeout(randomize, 700);
	}
}

// Takes place when the player is out of lives
function gameOver() {
	alert(`GAME OVER! YOUR SCORE IS ${scoreCount}`);
	for (var i = 0; i < colors.length; i++) {
		colors[i].style.backgroundColor = 'black';
		colors[i].classList.remove('pick');
		code.textContent = 'RGB(0, 0, 0)';
		code.style.color = 'black';
		newGame.style.display = 'block';
		newColor.style.display = 'none';
	}
	// If the player beats the current high score
	if (scoreCount > hScore) {
		alert('New high-score!');
		var name = prompt('Enter your Name pls');
		hScore = scoreCount;
		highScore.textContent = `${name} ----- ${hScore}`;
		hs.style.display = 'block';
	}
}

newGame.addEventListener('click', ()=> {
	randomize();
	scoreCount = 0;
	score.textContent = scoreCount;
	lifeCount = 5;
	lives.textContent = lifeCount;
	newGame.style.display = 'none';
	newColor.style.display = 'block';
	code.style.color = 'white';
})


// Initializes the game
randomize();