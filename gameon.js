const containerResult = document.querySelector(".container__results")
let containerHidden = false;
const options = ['Rock', 'Paper', 'Scissors']

let playerScore = 0;
let compterScore = 0;
let round = 0;

function updateScoreDisplay() {

    round++;
    document.getElementById('player-score').innerHTML = playerScore.toString();
    document.getElementById('computer-score').innerHTML = compterScore.toString();
    document.getElementById('round').innerHTML = round.toString();
    if (round >= 5) {
        if (playerScore > compterScore)
            document.getElementById('winner').innerHTML = "The Winner is You";
        else if (playerScore < compterScore)
            document.getElementById('winner').innerHTML = "The Winner is the Computer";
        else document.getElementById('winner').innerHTML = "Draw";

        playerScore = 0;
        compterScore = 0;
        round = 1;
    }
    else
    document.getElementById('winner').innerHTML = "";
}

document.addEventListener("DOMContentLoaded", updateScoreDisplay())

function play(playerChoice) {
    const computerChoice = ramdomNumber(0, 2);
    document.getElementById('computer-choice').innerHTML = '('+options[computerChoice]+')';
    document.getElementById('player-choice').innerHTML = '('+options[playerChoice]+')';
    if ((computerChoice == 0 && playerChoice == 2) ||
        (computerChoice == 1 && playerChoice == 0) ||
        (computerChoice == 2 && playerChoice == 1)) {
        compterScore++;
        result("You lost! I'll be a prisioner forever", + computerChoice);
    } else if (computerChoice == playerChoice) {
        result("Your weapon has the same power, try again! ", computerChoice);
    } else {
        playerScore++;
        result("You defeated Toad, now I'm free! ", computerChoice);
    }
    if (!containerHidden) {
        containerResult.classList.add("hide__off");
        containerHidden = true;
    }
}

function result(message, computerChoice) {
    document.querySelector("h5").innerHTML = message;
    document.querySelector("h4").innerHTML = 'Toad possessed the powerful weapon of ' + options[computerChoice];
    updateScoreDisplay();
}

function ramdomNumber(min, max) {
    return (Math.random() * (max - min) + min).toFixed();
}



