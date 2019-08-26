$(document).ready(function() {

    //variables created

    var letterList = ["a", "b", "c","d", "e","f", "g", "h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var guessRemain = 10
    var win = 0;
    var lose = 0;
    var userGuess = [];
    var incorrectGuess = [];

    //display main variable/game elements on the screen for user

    document.getElementById("incorrect_guess").innerHTML = incorrectGuess;
    document.getElementById("guess_remain").innerHTML = guessRemain;
    document.getElementById("win").innerHTML = win;
    document.getElementById("lose").innerHTML = lose;
    

    //main game

    function checkGuess () {

    //choose letter at random

    var chosenLetter = letterList[Math.floor(Math.random() * letterList.length)];
    console.log(chosenLetter);

    //capture user guess

    document.addEventListener("keyup", function() {
    var userGuess = event.key;
    console.log(userGuess)

    //compare user guess to chosen letter
    //if user guesses correctly- win counter is updated and alert launches

        if (userGuess == chosenLetter) {
            win++;
            document.getElementById("win").innerHTML = win;
            alert("You got it right! You must be Psychic!");
            
        }

    // if the user guesses incorrectly they continue to guess until they get the answer right OR guesses remaining is 0    
        
        if (userGuess !== chosenLetter) {

            guessRemain--;
            incorrectGuess = incorrectGuess + userGuess + " ";
            document.getElementById("guess_remain").innerHTML = guessRemain;
            document.getElementById("incorrect_guess").innerHTML = incorrectGuess;
        }

    // if guesses remaining is 0 then the game is over and lose ++ and alert is triggered.
    
        if (guessRemain == 0) {
            lose++;
            alert("You are out of guesses. Probably not Psychic")
            document.getElementById("lose").innerHTML = lose;

        }

 
    })

}

checkGuess()

});