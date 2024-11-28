for(i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        button = this.innerHTML    
        handleClick(button);
        buttonAnimation(this.innerHTML)
    });

}

function handleClick(buttons){
    
    switch (buttons){
        case 'w':
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case 'a':
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case 's':
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case 'd':
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case 'j':
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case 'k':
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case 'l':
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        default:
            console.log("Invalid");

    }
}
  

document.addEventListener("keydown", function(event){
    playSound(event);
    buttonAnimation(event.key);
});

function playSound(event){
    key = event.key;
    switch (key){
        case 'w':
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case 'a':
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case 's':
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case 'd':
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case 'j':
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case 'k':
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case 'l':
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        default:
            console.log("Invalid");

    }
}


function buttonAnimation(current_key){
    var active_button = document.querySelector("." + current_key);
    active_button.classList.add("pressed");
    setTimeout(function(){
        active_button.classList.remove("pressed");       
    }, 100);
}
