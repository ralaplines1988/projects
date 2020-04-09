const getUserChoice = userInput =>{
 userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb' ){
    return userInput;
  } else {
    console.log('You typed the wrong choice.');
  }
}
//console.log(getUserChoice('rock'));

const getComputerChoice = () =>{
  const comChoice = Math.floor(Math.random()*3);
  if(comChoice === 0){
    return 'rock';
  } else if(comChoice === 1){
    return 'paper';
  } else if(comChoice === 2){
    return 'scissors';
  }
}

//console.log(getComputerChoice());


const determineWinner =(userChoice, computerChoice) => {
  if (userChoice === 'bomb'){
    return 'Player won with Big bomb!!!!!';
  } else if(userChoice === computerChoice){
    return 'The game is a tie.'
  } else if (userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'Computer won!';
    } else {
      return 'Player won!';
    }
  } else if (userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return 'Computer won!'
    } else {
      return 'Player won!';
    }
  } else if (userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return 'Computer won!';
    } else {
      return 'Player won!';
    }
  }
}

const playGame = ()=>{
  const userChoice = getUserChoice('Bomb');
  const computerChoice = getComputerChoice();
  console.log(userChoice + " " + computerChoice)
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();