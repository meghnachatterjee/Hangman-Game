//Create an array that will hold all the alphabets

var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Creating variables to hold the number of wins and losses. They start at 0. Lives start at 10
var wins = 0;
var losses = 0;

//Creating empty arrays to put correctly guessed letters and wrongly guessed letters
let correctGuess=[];
let wrongGuess=[];
let lives=10;

// Creating variables that will count the number of guesses, spaces in a movie and lives
let guessCount;
let spaceChosenWord;


//Create an array that will hold all the words
var words=['cat','dog','horse','monkey','cow','okapi','bear','lion','tiger',
'pig','wolf','goat','leopard','camel','hare','hyena'];


//Create an empty array to hold underscores
let underScore=[];

//Choose a word randomly
let wordsRandomNumber= Math.floor(Math.random()*words.length);
let chosenWord=words[wordsRandomNumber];

//Testing that a random word gets chosen
console.log(chosenWord);

//Create underscores function based on the length of the word

let createUnderScore = () =>{
for(let i=0;i<chosenWord.length;i++){
    underScore.push('_');
}
return underScore;
}

//Testing underscores get created based on length of chosen word
console.log(createUnderScore());

//Hooking into HTL elements

//correctGuess=document.getElementById('#word-blanks');
//wrongGuess=document.getElementById('#wrong-guesses');

//Register the letter the user has pressed and save it in a variable

document.onkeyup = function(event) {

     // Determines which key was pressed.
var userGuess = event.key;

//If user guess is one of the letters continue
//if(letters.indexOf(userGuess)){

   

//testing
//console.log(userGuess);

//Verify if the letter pressed is correct
let guessContains=chosenWord.indexOf(userGuess);

//Testing whether this returns anything
//console.log(guessContains);

//If correct then push the letter to the correct array
if(guessContains>-1){
    //console.log(true);
  correctGuess.push(userGuess);
  //Replace the underscore with the correct letter guessed by user
  underScore[chosenWord.indexOf(userGuess)]=userGuess;
  //testing
  console.log(underScore);
}

//Testing right guess
//console.log(correctGuess);

//If wrong push to array of guessed letters

if(guessContains<=-1){
    //testing
    //console.log(false);
    wrongGuess.push(userGuess);
}

//Testing wrong guess 
console.log(wrongGuess);

//Decrement lives by one each time user guesses the wrong letter and 
//Increment losses by one if user loses all lives before guessing the word
if(wrongGuess.length===chosenWord.length){
    lives--;
    losses++;
}

//Testing lives
//console.log(lives);

//Increment wins by one if word matches
if(correctGuess.length===chosenWord.length){
    wins++;
}
//



}
//}