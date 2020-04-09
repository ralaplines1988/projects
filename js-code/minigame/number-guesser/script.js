let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, correctAns) => {
  if(humanGuess > 9){
    guessResult.innerText = 'Number must be between 0 and 9!';
    return false;
  }
  const humanResult = Math.abs(correctAns - humanGuess);
  const computerResult = Math.abs(correctAns - computerGuess);
  if(humanResult === computerResult){
    return 'tie';
  } else {
  return humanResult <= computerResult;
    }
}

const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

const advanceRound = () => currentRoundNumber++;