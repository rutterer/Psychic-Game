var wins = 0;
var losses = 0;
var guessesLeft = 9;
/* var alreadyGuessed = []; */

var winText = document.getElementById("windiv");
var lossText = document.getElementById("lossdiv");
var guessLeftText = document.getElementById("guessesleftdiv");
var guessesText = document.getElementById("guessesdiv");

var compChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var compLetter = compChoices[Math.floor(Math.random() * compChoices.length)];


document.onkeyup = function (event) {

    var playerGuess = event.key.toLowerCase();

  /*   alreadyGuessed.push(playerGuess); */


if (compChoices.includes(playerGuess)) {

    if (playerGuess === compLetter) {
        wins++;
        compLetter = compChoices[Math.floor(Math.random() * compChoices.length)];
        guessesLeft = 9;
        guessesText.textContent = " ";

    } else if (playerGuess !== compLetter) {
        guessesLeft--;
    }

    if (guessesLeft === 0) {
        losses++;
        guessesLeft = 9;
        compLetter = compChoices[Math.floor(Math.random() * compChoices.length)];
        guessesText.textContent = " ";
    }

    winText.textContent =  wins;
    lossText.textContent =  losses;
    guessLeftText.textContent =  guessesLeft;
    guessesText.textContent += " " + playerGuess;
 
}

}
