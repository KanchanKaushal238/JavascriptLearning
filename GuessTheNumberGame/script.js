let randomNumber = Number(Math.floor(Math.random() * 100) + 1);

let guesses = document.querySelector(".guesses");
let lastResult = document.querySelector(".lastResult");
let lowOrHigh = document.querySelector(".lowOrHigh");

const guessedNumber = document.querySelector("#guessedNumber");
const submitButton = document.querySelector("#submitButton");

let resetButton;

let guessCount = 1;

const resetParagraphs = document.querySelector(".resultParas");
resetParagraphs.style.visibility = "hidden";

function checkGuess(){
    const userGuess = Number(guessedNumber.value);
    resetParagraphs.style.visibility = "visible";
    if(guessCount === 1)
    {
        guesses.textContent = "Previous guesses: ";
    }
    guesses.textContent = `${guesses.textContent} || ${userGuess} || `;

    if(userGuess === randomNumber)
    {
        lastResult.textContent = `Congratulations! You got it right!`;
        lastResult.style.backgroundColor = "green";
        lastResult.style.color = "white";
        lowOrHigh.textContent = "";
        gameOver();
    }
    else if(guessCount === 10){

        lastResult.textContent = `!!!GAME OVER!!!`;
        lastResult.style.backgroundColor = "blue";
        lastResult.style.color = "white";
        lowOrHigh.textContent = "";
        gameOver();
    }
    else
    {
        lastResult.textContent = "Wrong!";
        lastResult.style.backgroundColor = "purple";
        lastResult.style.color = "white";
        if(userGuess < randomNumber) {
            lowOrHigh.textContent = 'Last guess was too low!';
          } else if(userGuess > randomNumber) {
            lowOrHigh.textContent = 'Last guess was too high!';
          }
    }
    guessCount++;
    guessedNumber.value = '';
    guessedNumber.focus();   
}

submitButton.addEventListener('click', checkGuess);

function gameOver(){
    guessedNumber.disabled = true;
    submitButton.disabled = true;
    resetButton = document.createElement('button');
    resetButton.style.display = 'block'
    resetButton.style.margin = '0 auto'
    resetButton.textContent = "Start new game";
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame()
{
    guessCount = 1;
    const resetParas = document.querySelectorAll('.resultParas p');
    for(const par of resetParas)
    {
        par.textContent = "";
    }
    resetParagraphs.style.visibility = "hidden";
    resetButton.parentNode.removeChild(resetButton);

    guessedNumber.disabled = false;
    submitButton.disabled = false;
    guessedNumber.value = "";
    guessedNumber.focus();

    lastResult.style.backgroundColor = white;
    randomNumber = Math.floor(Math.random()*100)+1;
}
