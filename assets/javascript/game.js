//Playing audio
var audioObject = document.getElementById("myAudio");
function playAudio() {
   audioObject.play();
}
function pauseAudio() {
   audioObject.pause();
}

var wins = 0;
var losses = 0;
let winningMessage = 'Congratulations!!!You Win!';
let losingMessage = "Sorry, you lose!";

var correctGuess = new Map();
var wrongGuess = new Map();
var guesses = 5;

initialize= () => {
    correctGuess = new Map();
    wrongGuess = new Map();
    guesses = 5;

};
var words = ['cat', 'dog', 'horse', 'monkey', 'cow', 'okapi', 'bear', 'lion','gazelle','giraffe',
    'tiger', 'pig', 'wolf', 'goat', 'leopard', 'camel', 'hare', 'hyena','raccoon','hippopotamus'];


var chosenWord = '';
getRandom = function () {
    let wordsRandomNumber = Math.floor(Math.random() * words.length);
    chosenWord = words[wordsRandomNumber];
    console.log("Chosen word:"+chosenWord);
}
getRandom();

let createAnswerArray = () => {
    var answerArray = [];
    for (var key in chosenWord) {
        answerArray.push(' _ ');
    }
    return answerArray;
}

var wrongArray = [];
var answerArray = createAnswerArray();

checkWin = function () {
    //Increment wins by one if word matches
    if (correctGuess.size === chosenWord.length) {
        wins++;
        document.getElementById('win-counter').innerHTML = wins;
        document.getElementById('final-result').innerHTML = winningMessage;
    }
}

checkGuess = function () {
    if (guesses < 1) {
        document.getElementById('final-result').innerHTML = losingMessage;
        losses++;
        return false
    }
    else {
        return true
    }
}

comments = function () {
    document.getElementById('word-blanks').innerHTML = answerArray.join('');
    document.getElementById('wrong-guesses').innerHTML = wrongArray.join('');
    document.getElementById('guesses-left').innerHTML = guesses;
    document.getElementById('win-counter').innerHTML = wins;
    document.getElementById('loss-counter').innerHTML = losses;
}
comments();


function getAllIndexes(arr, val) {
    var indexes = [], i;
    for (i = 0; i < arr.length; i++)
        if (arr[i] === val)
            indexes.push(i);
    return indexes;
}

var wrongIdx = 0;

document.addEventListener('keypress', (event) => {
    if (!checkGuess()) return null;
    var userGuess = event.key;
    
    var idxs = getAllIndexes(chosenWord, userGuess);
    console.log(idxs);
    if (idxs.length > 0) {
        for (var idx of idxs) {
            correctGuess.set(idx, userGuess);
            console.log(correctGuess);
        }
        for (var [k, v] of correctGuess) {
            answerArray[k] = v;
        }
    } else {
        if (!wrongGuess.has(userGuess)) {
            guesses--;
            wrongGuess.set(userGuess, wrongIdx);
            wrongIdx++;
            wrongArray = [];
            for (var [k, v] of wrongGuess) {
                wrongArray[v] = k;
            }
        }
        checkGuess();
    }
    checkWin();
    comments();
});


document.getElementById('reset').onclick = function () {
    getRandom();
    initialize();
    wrongArray = [];
    answerArray = createAnswerArray();
    document.getElementById('final-result').innerHTML =" ";
    comments();
}


