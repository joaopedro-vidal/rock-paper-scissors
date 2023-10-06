function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        return "The result is a tie!";
    }
    if(playerSelection === "rock") {
        if(computerSelection === "scissors") {
            return "You Won! Rock beats Scissors";
        } else {
            return "You Lose! Paper beats Rock";
        }
    }
    if(playerSelection === "paper") {
        if(computerSelection === "rock") {
            return "You Won! Paper beats Rock";
        } else {
            if(computerSelection === "scissors") {
                return "You Lose! Scissors beats Paper";
            }
        }
    }
    if(playerSelection === "scissors") {
        if(computerSelection === "rock") {
            return "You Lose! Scissors beats Rock";
        } else {
            if(computerSelection === "paper") {
                return "You Won! Scissors beats Paper";
            }
        }
    }
}


function computerPlay() {
    switch (Math.floor(Math.random() * 3) + 1) {
        case 1:
            return "rock"
        case 2:
            return "paper"
        default:
            return "scissors"
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        do {
            var userChoice = prompt("Do you choose rock, paper or scissors? Write the option in the space below");
            var correctChoice = false;
            var playerSelection = userChoice.toLowerCase();
            if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
                correctChoice = true;
            } else {
                alert("Invalid!! You digited " + playerSelection + " Please write rock, paper or scissors");
            }
        } while (correctChoice == false);
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}
game();


// script.js
const startButton = document.getElementById("startButton");
const progressBar = document.querySelector(".progress-bar");
const img = document.querySelector("img");

startButton.addEventListener("click", () => {
  // Defina a largura máxima da barra (100% no exemplo)
  const maxWidth = 100;

  // Animação da barra de progresso
  let width = 0;
  const animationInterval = setInterval(() => {
    if (width >= maxWidth) {
      clearInterval(animationInterval);
    } else {
      width++;
      progressBar.style.width = width + "%";
    }
  }, 10); // Velocidade da animação

  // Animação da imagem
  let imgRight = 0;
  const imgAnimationInterval = setInterval(() => {
    if (imgRight >= maxWidth) {
      clearInterval(imgAnimationInterval);
    } else {
      imgRight++;
      img.style.right = imgRight + "%";
    }
  }, 10); // Velocidade da animação
});
