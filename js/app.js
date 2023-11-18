let playerScore = 0;
let compyScore = 0;
let gameOver = false;

let playerChoice = '';
let compyChoice = '';

const resetBtn = document.querySelector(".reset-btn");
const playerScoreDisplay = document.querySelector(".player-score");
const compScoreDisplay = document.getElementById("compy-score");
const playBox = document.getElementById("play-box");
const finalPanel = document.getElementById('final-panel');
const winner = document.getElementById('winner');

playerScoreDisplay.innerHTML = playerScore;
compScoreDisplay.innerHTML = compyScore;

// computer chooses from r p s
const compyOptions = ['rock', 'paper', 'scissors'];

function compyRandomChoice (){
    compyChoice = compyOptions[(Math.floor(Math.random() * compyOptions.length))];
}

// get user input
// Player buttons:
const rockButton = document.getElementById('player-rock-btn');
const paperButton = document.getElementById('player-paper-btn');
const scissorsButton = document.getElementById('player-scissors-btn');

const compRockButton = document.getElementById('comp-rock-btn');
const compPaperButton = document.getElementById('comp-paper-btn');
const compScissorsButton = document.getElementById('comp-scissors-btn');

rockButton.addEventListener('click', () => {
    playerChoice = 'rock';
    compyRandomChoice();
    comparePlayers(playerChoice, compyChoice);
});
paperButton.addEventListener('click', () => {
    playerChoice = 'paper';
    compyRandomChoice();
    comparePlayers(playerChoice, compyChoice);
});
scissorsButton.addEventListener('click', () => {
    playerChoice = 'scissors';
    compyRandomChoice();
    comparePlayers(playerChoice, compyChoice);
});

// compare to comp
const comparePlayers = (player, comp) => {
    if (gameOver === true) {
        finalPanel.classList.remove('hidden');
        playBox.classList.add('hidden');
    } else {
        if (player === 'rock' && comp === 'rock') {
            playerScore++;
            compyScore++;
            clearClasses();
            rockDrawClasses();
            playerScoreDisplay.innerHTML = playerScore;
            compScoreDisplay.innerHTML = compyScore;
            winnerCheck();
        } else if (player === 'paper' && comp === 'paper') {
            playerScore++;
            compyScore++;
            clearClasses();
            paperDrawClasses();
            playerScoreDisplay.innerHTML = playerScore;
            compScoreDisplay.innerHTML = compyScore;
            winnerCheck();
        } else if (player === 'scissors' && comp === 'scissors') {
            playerScore++;
            compyScore++;
            clearClasses();
            scissorsDrawClasses();
            playerScoreDisplay.innerHTML = playerScore;
            compScoreDisplay.innerHTML = compyScore;
            winnerCheck();
        } else if (player === 'rock' && comp === 'scissors') {
            playerScore++;
            clearClasses();
            rockButton.classList.add('win');
            compScissorsButton.classList.add('lose');
            playerScoreDisplay.innerHTML = playerScore;
            winnerCheck();
        } else if (player === 'rock' && comp === 'paper') {
            compyScore++;
            clearClasses();
            compPaperButton.classList.add('win');
            rockButton.classList.add('lose');
            compScoreDisplay.innerHTML = compyScore;
            winnerCheck();
        } else if (player === 'paper' && comp === 'rock') {
            playerScore++;
            clearClasses();
            paperButton.classList.add('win');
            compRockButton.classList.add('lose');
            playerScoreDisplay.innerHTML = playerScore;
            winnerCheck();
        } else if (player === 'paper' && comp === 'scissors') {
            compyScore++;
            clearClasses();
            paperButton.classList.add('lose');
            compScissorsButton.classList.add('win');
            compScoreDisplay.innerHTML = compyScore;
            winnerCheck();
        } else if (player === 'scissors' && comp === 'rock') {
            compyScore++;
            clearClasses();
            compRockButton.classList.add('win');
            scissorsButton.classList.add('lose');
            compScoreDisplay.innerHTML = compyScore;
            winnerCheck();
        } else if (player === 'scissors' && comp === 'paper') {
            playerScore++;
            clearClasses();
            scissorsButton.classList.add('win');
            compScissorsButton.classList.add('lose');
            playerScoreDisplay.innerHTML = playerScore;
            winnerCheck();
        }
    }
}

const clearClasses = () => {
    rockButton.classList.remove('win');
    rockButton.classList.remove('lose');
    compRockButton.classList.remove('win');
    compRockButton.classList.remove('lose');

    paperButton.classList.remove('win');
    paperButton.classList.remove('lose');
    compPaperButton.classList.remove('win');
    compPaperButton.classList.remove('lose');

    scissorsButton.classList.remove('win');
    scissorsButton.classList.remove('lose');
    compScissorsButton.classList.remove('win');
    compScissorsButton.classList.remove('lose');
}

const rockDrawClasses = () => {
    rockButton.classList.add('win');
    compRockButton.classList.add('win');
}

const paperDrawClasses = () => {
    paperButton.classList.add('win');
    compPaperButton.classList.add('win');
}

const scissorsDrawClasses = () => {
    scissorsButton.classList.add('win');
    compScissorsButton.classList.add('win');
}


// keep track of score first to five wins


const winnerCheck = () => {
    if (playerScore === 5) {
        gameOver = true;
        winner.innerHTML = "Player"
    } else if (compyScore === 5) {
        gameOver = true;
        winner.innerHTML = "Computer"
    }
}

resetBtn.addEventListener('click', reset);

function reset() {
    clearClasses();
    gameOver = false;
    playerScore = 0;
    compyScore = 0;
    playerScoreDisplay.innerHTML = playerScore;
    compScoreDisplay.innerHTML = compyScore;
    finalPanel.classList.add('hidden');
    playBox.classList.remove('hidden');
}