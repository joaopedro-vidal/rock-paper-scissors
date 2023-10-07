





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



