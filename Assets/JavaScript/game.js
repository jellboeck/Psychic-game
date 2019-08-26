$(document).ready(function() {

    //variables created

    var letterList = ["a", "b", "c","d", "e","f", "g", "h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var guessRemain = 10
    var win = 0;
    var lose = 0;
    var userGuess = "";
    var incorrectGuess = [];
    var chosenLetter = "";
    


    //display main variable/game elements on the screen for user

    document.getElementById("incorrect_guess").innerHTML = incorrectGuess;
    document.getElementById("guess_remain").innerHTML = guessRemain;
    document.getElementById("win").innerHTML = win;
    document.getElementById("lose").innerHTML = lose;

    //main game

    //reset variable and choose letter at random(also starts game over)

    function chooseLetter (){

    incorrectGuess= [];
    guessRemain = 10;
    chosenLetter = "";
    userGuess = "";

    chosenLetter = letterList[Math.floor(Math.random() * letterList.length)];
    console.log(chosenLetter);


}
  
    function checkGuess () {

    //call the chooseLetter function 
    chooseLetter()

    //capture user guess
   
    document.addEventListener("keyup", function() {
        var userGuess = event.key;
        console.log(userGuess)

    //compare user guess to chosen letter

    //if user guesses correctly- win counter is updated and alert launches
    //chooseLetter is called to start the game over without reseting the win/lose counter

        if (userGuess == chosenLetter) {
            win++;
            alert("You got it right! The letter was '" + chosenLetter +  "'. Wow! You might be Psychic!");
            chooseLetter()
        }

    //if the user guesses incorrectly they continue to guess until they get they answer right OR guesses remaining is 0 
    //incorrect guesses are displayed for the user   

        else {

            guessRemain--;
            incorrectGuess = incorrectGuess + userGuess + " ";
          
        }

    //if guesses remaining is 0 then the game is over and lose ++ and alert is triggered. 
    //chooseLetter is called to start the game over without reseting the win/lose counter
    
        if (guessRemain == 0) {
            lose++;
            alert("You are out of guesses. The letter was '" + chosenLetter + "'. You are probably not Psychic")
            chooseLetter()

        }

    //updates the screen elements to capture the last game
       
        document.getElementById("lose").innerHTML = lose;
        document.getElementById("guess_remain").innerHTML = guessRemain;
        document.getElementById("incorrect_guess").innerHTML = incorrectGuess;
        document.getElementById("win").innerHTML = win;

})

}

//calls the check guess function and starts the game

checkGuess()

});