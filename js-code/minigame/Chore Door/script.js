const doorImage1 = document.getElementById("door1");
const doorImage2 = document.getElementById("door2");
const doorImage3 = document.getElementById("door3");

const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

let numClosedDoors = 3;
let openDoor1,openDoor2,openDoor3;
let currentlyPlaying = true;

const closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

const startButton = document.getElementById("start");

const isBot = door =>{
  if(door.src === botDoorPath){
    return true;
  } else {
    return false;
  }
}

const isClicked = door => {
  if(door.src === closedDoorPath){
    return false;
  } else {
    return true;
  }
}

const playDoor = door => {
  numClosedDoors--;
  if(numClosedDoors === 0) {
  gameOver("win");
  } else if(isBot(door)){
    gameOver();
  }
}

const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random()*numClosedDoors);
  if(choreDoor === 0){
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if(choreDoor === 1){
    openDoor1 = spaceDoorPath;
    openDoor2 = botDoorPath;
    openDoor3 = beachDoorPath;
  } else {
    openDoor1 = spaceDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = botDoorPath;
  }
}

doorImage1.onclick = function(){
  console.log(this);
  if(!isClicked(this) && currentlyPlaying){
  doorImage1.src = openDoor1;
  playDoor(this);
  }
};
doorImage2.onclick = function() {
  console.log(this);
  if(!isClicked(this) && currentlyPlaying){
  doorImage2.src = openDoor2;
  playDoor(this);
  }
};
doorImage3.onclick = function() {
  console.log(this);
  if(!isClicked(this) && currentlyPlaying){
  doorImage3.src = openDoor3;
  playDoor(this);
  }
};

startButton.onclick = () => {
  if(!currentlyPlaying){
  startRound();
  }
}

const startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = "Good luck!";
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}

const gameOver = (status) => {
  if(status === "win"){
    startButton.innerHTML = 'You win! Play again?';
  } else {
    startButton.innerHTML = 'Game over! Play again?';
  }
  currentlyPlaying = false;
}

startRound();