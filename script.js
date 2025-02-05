import {stopConfetti, startConfetti, removeConfetti} from "./confetti.js";

const playerScoreEl = document.getElementById('player-score');
const playerChoiceEl = document.getElementById('player-choice');
const computerScoreeEl = document.getElementById('computer-score');
const computerChoiceEl = document.getElementById('computer-choice');
const resultText = document.getElementById('resultText');

const playerRock = document.getElementById('player-rock');
const playerPaper = document.getElementById('player-paper');
const playerScissors = document.getElementById('player-scissors');
const playerLizard = document.getElementById('player-lizard');
const playerSpock = document.getElementById('player-spock');

const computerRock = document.getElementById('computer-rock');
const computerPaper = document.getElementById('computer-paper');
const computerScissors = document.getElementById('computer-scissors');
const computerLizard = document.getElementById('computer-lizard');
const computerSpock = document.getElementById('computer-spock');

const allIcons = document.querySelectorAll('.fa');

const picks = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let playerScoreNumber = 0;
let computerScoreNumber = 0;
let computerPick = '';

function resetIconColors() {
  allIcons.forEach((icon) =>{
    icon.classList.remove('selected');
  })
  stopConfetti();
  removeConfetti();
}

function computerRandomPick() {
  const computerPickNumber = Math.random();
  if (computerPickNumber < 0.2) {
    computerPick = 'rock';
  } else if (computerPickNumber <= 0.4) {
    computerPick = 'paper';
  } else if (computerPickNumber <= 0.6) {
    computerPick = 'scissors';
  } else if (computerPickNumber <= 0.8) {
    computerPick = 'lizard';
  } else {
    computerPick = 'spock';
  }
}

function displayComputerPick() {

  switch (computerPick) {
    case 'rock': 
      computerRock.classList.add('selected');
      computerChoiceEl.textContent = '  Rock';
      break;
    case 'paper': 
      computerPaper.classList.add('selected');
      computerChoiceEl.textContent = '  Paper';
      break;
    case 'scissors': 
      computerScissors.classList.add('selected');
      computerChoiceEl.textContent = '  Scissors';
      break;
    case 'lizard': 
      computerLizard.classList.add('selected');
      computerChoiceEl.textContent = '  Lizard';
      break;
    case 'spock': 
      computerSpock.classList.add('selected');
      computerChoiceEl.textContent = ' Spock';
      break;
    default:
      break;
  }
}

function updateScore(playerChoice) {
  if (playerChoice === computerPick) {
    resultText.textContent = "It's a draw";
  } else {
    const pick = picks[playerChoice];
    if (pick.defeats.indexOf(computerPick) > -1 ) {
      startConfetti();
      resultText.textContent = "You Won";
      playerScoreNumber++;
      playerScoreEl.textContent = playerScoreNumber;
    } else {
      resultText.textContent = "You Lost";
      computerScoreNumber++;
      computerScoreeEl.textContent = computerScoreNumber;
    }
  }
}

function checkResults(playerChoice) {
  resetIconColors();
  computerRandomPick();
  displayComputerPick();
  updateScore(playerChoice)
}

function resetAll() {
  playerScoreNumber = 0;
  playerScoreEl.textContent = playerScoreNumber;
  playerChoiceEl.textContent = '';
  computerScoreNumber = 0;
  computerScoreeEl.textContent = computerScoreNumber;
  computerChoiceEl.textContent = '';
  resultText.textContent = '';
  resetIconColors();
}
window.resetAll = resetAll;

function select(playerChoice) {

  checkResults(playerChoice);
  switch (playerChoice) {
    case 'rock': 
      playerRock.classList.add('selected');
      playerChoiceEl.textContent = '  Rock';
      break;
    case 'paper': 
      playerPaper.classList.add('selected');
      playerChoiceEl.textContent = '  Paper';
      break;
    case 'scissors': 
      playerScissors.classList.add('selected');
      playerChoiceEl.textContent = '  Scissors';
      break;
    case 'lizard': 
      playerLizard.classList.add('selected');
      playerChoiceEl.textContent = '  Lizard';
      break;
    case 'spock': 
      playerSpock.classList.add('selected');
      playerChoiceEl.textContent = '  Spock';
      break;
    default:
      break;
  }
}
// Fix for HTML being able to acces the function from module
window.select = select;

// Call function to display 0 for the socre by default
resetAll();