var n = document.querySelectorAll(".drum").length;

for(var i=0;i<n;i++){

    document.querySelectorAll("button")[i].addEventListener("click",function(){

        var button_html = this.innerHTML;
        makesound(button_html);
        animation(button_html);
       
    })
}

document.addEventListener("keydown",function(event){

    makesound(event.key);
    animation(event.key);
})






function makesound(key){

    switch (key) {
        case "w":
            var audio = new Audio("tom-1.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("tom-2.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("tom-3.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("tom-4.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("crash.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("snare.mp3");
            audio.play();
            break;

        case "l":
            var kick = new Audio("kick-bass.mp3");
            kick.play();
            break;
    
        default:
            break;
    }
}

function animation(key){

    var final = document.querySelector("." + key);
    final.classList.add("pressed");

    setTimeout(()=>{
        final.classList.remove("pressed");
    }, 95);
}