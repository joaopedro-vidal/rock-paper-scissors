
const buttonsSelector = document.querySelectorAll(".game__button");
const containerResult = document.querySelector(".container__results")
let containerHidden = false;

buttonsSelector.forEach((button, index) => {
    button.addEventListener("click", () => {
        const buttonIndex = index;
        play(buttonIndex);


        if (!containerHidden) {
            containerResult.classList.add("hide__off");
            containerHidden = true;
        }
    });
});

function play(buttonsSelector) {
    const computer = ramdomNumber(0,2);
    buttonsSelector;

    if((computer == 0 && buttonsSelector == 2) ||
       (computer == 1 && buttonsSelector == 0) ||
       (computer == 2 && buttonsSelector == 1)) {
        
        result("You lost! I'll be a prisioner forever", + computer);

       }else if (computer == buttonsSelector) {
        
        result("Your weapon has the same power, try again! ", computer);

       } else {
        
        result("You defeated Toad, now I'm free! ", computer);

       }

}

function result(message, computer) {
    const options = ['Rock', 'Paper', 'Scissors']
    document.querySelector("h5").innerHTML = message;
    document.querySelector("h4").innerHTML = 'Toad possessed the powerful weapon of ' + options[computer];
}

function ramdomNumber(min, max) {
    return (Math.random() * (max -min) + min).toFixed();
}