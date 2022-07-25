// "use strict";
let buttonColors =["red" , "blue", "green","yellow"] ; 

let gamepattern =[] ;

let userClickedPattern = [];


$('.btn').click(function(event){
   let userChoosenCOlor= event.target.id ;
  userClickedPattern.push(userChoosenCOlor) ;

//   play sound

playSound(userChoosenCOlor) ;

animatePress(userChoosenCOlor) ;
})



function nextSequence(){
    let randomNumber = Math.floor(Math.random()*4) ;
    let randomChoosenColor = buttonColors[randomNumber];
     gamepattern.push(randomChoosenColor) ;

    // fade

    $('#' + randomChoosenColor ).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100) ;
    playSound(randomChoosenColor) ;
    }
   

    function playSound(name){
        let audio = new Audio("sounds/" + name + ".mp3")
        audio.play();
    }


   function animatePress(currentColour) {
        $("#" + currentColour ).addClass('pressed') ;

        setTimeout( function(){
            $("#" + currentColour).removeClass("pressed")

        }, 100) ;
   } 
   