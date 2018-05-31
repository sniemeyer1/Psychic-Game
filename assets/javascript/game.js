
var guessesLeft = 9;
var guessesSoFar = [];
var userGuess = null;
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var letterToBeGuessed = letters[Math.floor(Math.random() * letters.length)];

document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	if (guessesSoFar.indexOf(userGuess) < 0 && letters.indexOf(userGuess) >= 0) {
		guessesSoFar[guessesSoFar.length]=userGuess;
		guessesLeft--;
	}

	
	if (letterToBeGuessed == userGuess) {
			wins++;
			guessesLeft = 9;
			guessesSoFar = [];
			letterToBeGuessed = letters[Math.floor(Math.random() * letters.length)];
	}

	if (guessesLeft == 0) {
			losses++;
			guessesLeft = 9;
			guessesSoFar = [];
			letterToBeGuessed = letters[Math.floor(Math.random() * letters.length)];
	}

	var html = 
	"<p><h2>The Psychic Game!</h2></p>" + 
	"<p>Guess what letter I\'m thinking of:</p>" + 
	"<p>Wins: " + wins + "</p>" + 
	"<p>Losses: " + losses + "</p>" + 
	"<p>Guesses Left: " + guessesLeft + "</p>" + 
	"<p>Your guesses so far: " + guessesSoFar + "</p>";
	
	document.querySelector("#game").innerHTML = html;

}