$(document).ready(function() {

    var letterList = ["a", "b", "c","d", "e","f", "g", "h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    

    var guessRemain = 10
    var win = 0;
    var lose = 0;
    var userGuess = [];
    var incorrectGuess = [];

    

    document.getElementById("incorrect_guess").innerHTML = incorrectGuess;
    document.getElementById("guess_remain").innerHTML = guessRemain;
    document.getElementById("win").innerHTML = win;
    document.getElementById("lose").innerHTML = lose;

    function checkGuess () {

    var chosenLetter = letterList[Math.floor(Math.random() * letterList.length)];
    console.log(chosenLetter);

    document.addEventListener("keyup", function() {
    var userGuess = event.key;
    console.log(userGuess)

        if (userGuess == chosenLetter) {
            win++;
            document.getElementById("win").innerHTML = win;
            
        }
        
        else if (userGuess !== chosenLetter && guessRemain > 0 ) {

            guessRemain--;
            incorrectGuess = incorrectGuess + userGuess;
            document.getElementById("guess_remain").innerHTML = guessRemain;
            document.getElementById("incorrect_guess").innerHTML = incorrectGuess;
        }

        else if (userGuess !== chosenLetter && guessRemain > 0) {
            lose++;

        }

 
    })

// }

}

checkGuess()

});