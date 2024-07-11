let randomNumber = parseInt(Math.random() * 500 + 1);
console.log(randomNumber);

const submit = document.querySelector('#submit-guess');
const userInput = document.querySelector("#guessField");
const guessBox = document.querySelector(".guesses");
const remaining = document.querySelector(".final-result");
const lowOrHi = document.querySelector(".lowOrHi");
const gameOver = document.querySelector(".result-guess");

const p = document.createElement('p');

let previousGuess = [];
let numOfGuess = 1;

let startGame = true;

if(startGame) {
    submit.addEventListener("click", function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        // let guess1 = userInput.value
        console.log(guess);
        validateGuess(guess);
    });
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number");
    }
    else if(guess < 1){
        alert("Please enter number more than 1")
    }
    else if(guess > 500){
        alert("Please enter a number less than 100")
    }
    else{
        previousGuess.push(guess);
        if(numOfGuess === 10){
        console.log(`chance. of ${numOfGuess === 10}`);
            
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        }
        else {
            displayGuess(guess);
            checkGuess(guess);
        }
        // console.log(previousGuess);
    }
}

function displayGuess(guess){ // it is display te guess
    userInput.value ='';
    guessBox.innerHTML += `${guess}, `;
    remaining.innerHTML = `${10 - numOfGuess}`
    numOfGuess++;
    // remaining.innerHTML = `${10 - numOfGuess}`

}


function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right`);
        endGame();
    }
    else if(guess < randomNumber){
        displayMessage(`Number is To low`);
    } 
    else if(guess > randomNumber) {
        displayMessage(`Number is To high`);
    }
}

function displayMessage(message){
    lowOrHi.innerHTML =`<h2 class="right-guess">${message}</h2>`;
    
}
function endGame(){
    userInput.value ='';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<button id="new-game">Start new Game</button>`;
    gameOver.appendChild(p);
    startGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector("#new-game");
    newGameButton.addEventListener('click', function(e){
        document.querySelector(".right-guess").style.display ="none";
        randomNumber = parseInt(Math.random() * 500 + 1);
        previousGuess = [];
        numOfGuess = 1;
        guessBox.innerHTML ='';
        remaining.innerHTML =`${11 - numOfGuess}`;
        userInput.removeAttribute('disabled');
        gameOver.removeChild(p); 
        

        startGame = true; 
    });
}