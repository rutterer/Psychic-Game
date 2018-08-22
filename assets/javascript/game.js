var wins = 0;
var losses = 0;
var guessesLeft = 9;

var winText = document.getElementById("windiv");
var lossText = document.getElementById("lossdiv");
var guessLeftText = document.getElementById("guessesleftdiv");
var guessesText = document.getElementById("guessesdiv");

var compChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var compLetter = compChoices[Math.floor(Math.random() * compChoices.length)];

document.onkeyup = function (event) {

    var playerGuess = event.key.toLowerCase();

    console.log(playerGuess);

    if (playerGuess === compLetter) {
        wins++;
    
    } else if (playerGuess !== compLetter) {
        guessesLeft--;
    }

    if (guessesLeft === 0) {
        losses++;
    }

    winText.textContent = "" + wins;
    lossText.textContent = "" + losses;
    guessLeftText.textContent = "" + guessesLeft;
    guessesText.textContent = "" + playerGuess;
 
}


