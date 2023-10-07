let playerPoints = 0;
let computerPoints = 0;
let tieRounds = 0;

// gets random computer choice of rock,paper, or scissors
function computerPlay() {
  // random number between 0 and 1
  let randomNum = Math.random();

  if (randomNum < 0.33) {
    return "rock";
  } else if (randomNum < 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}

// gets users choice of either rock,paper,scissors
function playerPlay() {
  let reviewed;

  do {
    let playerSelection = prompt(
      "please type in rock, paper, or scissors"
    ).toLowerCase();

    console.log("userInput: " + playerSelection);

    reviewed = theValidater(playerSelection);

    if (reviewed === undefined) {
      console.log("please enter a valid value, try again");
    }
  } while (reviewed === undefined);

  //   while (reviewed === undefined) {
  //     console.log("please enter a valid value");
  //     reviewed = playerPlay();
  //   }
  return reviewed;
}

// validates user input to make sure its one of the choices
function theValidater(playerSelection) {
  if (
    playerSelection === "rock" ||
    playerSelection === "paper" ||
    playerSelection === "scissors"
  ) {
    console.log("validated");
    return playerSelection;
  } else {
    console.log("invalid");
    return undefined;
  }
}

function playRound() {
    let playerChoice = playerPlay();
    let computerChoice = computerPlay();
  
    console.log("Player: " + playerChoice);
    console.log("Computer: " + computerChoice);
  
    let roundWinner = theRef(playerChoice, computerChoice);
    scoreTracker(roundWinner);
    console.log("RoundWinner: " + roundWinner);
  }
  

  function theRef(player, computer) {
    if (player === computer) {
      console.log("tieee");
      return "tie";
    } else if (player === "rock") {
      if (computer === "scissors") {
        console.log("player wins, rock beats scissors");
        return "player";
      } else {
        console.log("compuer wins, rocks loses to paper");
        return "computer";
      }
    } else if (player === "paper") {
      if (computer === "rock") {
        console.log("player wins, paper beats rock");
        return "player";
      } else {
        console.log("computer wins, papers loses to scissors");
        return "computer";
      }
    }
    // player chose scissors
    else {
      if (computer === "paper") {
        console.log("player wins, scissors beats paper");
        return "player";
      } else {
        console.log("computer wins, scissors loses to rock");
        return "computer";
      }
    }
  }
  