var button = document.getElementById("startbutton"); 

button.addEventListener("click", function(){
    var container = document.getElementById("startscreen");
    container.classList.toggle("hide");

    var containerGame = document.getElementById("gamescreen");
    containerGame.classList.toggle("hide__off");

});

