//Playing audio
var audioObject = document.getElementById("myAudio"); 
function playAudio() { 
    audioObject.play(); 
} 
function pauseAudio() { 
    audioObject.pause(); 
} 

//Create an array that will hold all the alphabets

var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Creating variables to hold the number of wins and losses. They start at 0. Lives start at 10
var wins = 0;
var losses = 0;
let winningMessage='Congratulations!!!You Win!';
let lossingMessage="Sorry, you lose!";

//Creating empty arrays to put correctly guessed letters and wrongly guessed letters
let correctGuess=[];
let wrongGuess=[];
let guesses=5;

// Creating variables that will count the number of guesses, spaces in a movie and lives
let guessCount;
let spaceChosenWord;

//Create an array that will hold all the words
var words=['cat','dog','horse','monkey','cow','okapi','bear','lion','tiger',
'pig','wolf','goat','leopard','camel','hare','hyena'];

//Create an empty array to hold answerArrays
let answerArray=[];
//Choose a word randomly
let wordsRandomNumber= Math.floor(Math.random()*words.length);
let chosenWord=words[wordsRandomNumber];

//Testing that a random word gets chosen
console.log("The value of the chosen random word:"+chosenWord);


//Create answerArrays function based on the length of the word
let createAnswerArray = () =>{
for(let i=0;i<chosenWord.length;i++){
    answerArray.push(' _ ');
}
return answerArray;
//Testing answerArrays get created based on length of chosen word
}

//Callng createanswerArray

createAnswerArray();
//console.log("Value of answerArray:"+answerArray);


//Hooking into HTL elements and using join to remove the commas

document.getElementById('word-blanks').innerHTML=answerArray.join('');
document.getElementById('guesses-left').innerHTML=guesses;
document.getElementById('win-counter').innerHTML=wins;
document.getElementById('loss-counter').innerHTML=losses;

//Register the letter the user has pressed and save it in a variable

document.addEventListener('keypress',(event) => {

     // Determines which key was pressed.
var userGuess = event.key;

//If user guess is one of the letters continue
if(letters.indexOf(userGuess)>-1){

//testing
//console.log("The value of userGuess:"+userGuess);

//Verify if the letter pressed is correct
let guessContainsNum=chosenWord.indexOf(userGuess);
//Testing whether this returns anything
//console.log(guessContains);
//If correct then push the letter to the correct array
if(guessContainsNum>-1){
    if(correctGuess.indexOf(userGuess)<=-1){
       correctGuess.push(userGuess);

       //testing
          console.log("The value of correctGuess Array:"+correctGuess);

          //Replace the answerArray with the correct letter guessed by user
            correctGuess[chosenWord.indexOf(userGuess)]=userGuess;
            document.getElementById('word-blanks').innerHTML=correctGuess.join('');
              //Increment wins by one if word matches
             if(correctGuess.length===chosenWord.length){
              wins++;
              document.getElementById('win-counter').innerHTML=wins;
              document.getElementById('final-result').innerhtml=winningMessage; 
              alert("Win!") ; }
              //reset  
        }
}
//If user is wrong, then push to array of guessed letters

if(guessContainsNum<=-1){
    if (wrongGuess.indexOf(userGuess)<=-1){
    wrongGuess.push(userGuess);
    guesses--;

    //testing
    console.log("Value of userGuess from wrong block:"+userGuess);
    console.log("Value of wrongGuess from wrong block:"+wrongGuess);

    document.getElementById('wrong-guesses').innerHTML=wrongGuess;
    document.getElementById('guesses-left').innerHTML=guesses;
    }
    //Decrement lives by one each time user guesses the wrong letter and 
//Increment losses by one if user loses all lives before guessing the word
    if (guesses===0){
        losses++;
        document.getElementById('loss-counter').innerHTML=losses;
        alert("Sorry,You lose!");
        alert("You lose the game,click any key to start again!")
    }
       // document.onkeyup = function(event){
        //createAnswerArray();
        //};

    }
    //reset


}
//The above {} ends the if statement that checks for letters pressed by user


});

//Problem1: Alerts printing before the guessed letters and the wins/losses update
//Problem2:Unable to print the wins/losses on html
//Problem3:How to reset the game

