const  buttonColours = ["red", "blue", "green", "yellow"];
let  userClickedPattern = [];
let  gamePattern = [];
let  started = true;
let  level = 0;


$(".start").click(function() {
  if (started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = false;
  }
});

$(".btn").click(function() {

  let  userChosenColour = this.getAttribute("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});


function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");

      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }

    } else {

      console.log("wrong");

      playSound("wrong");

      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      document.getElementById("level-title").innerHTML = `<span style='color: red;'>You Scored ${level-1}</span>  </br> </br> Game Over <span style='color: red;cursor:pointer;'>Click here</span> To Restart The Game`;

      //2. Call startOver() if the user gets the sequence wrong.
      startOver();
    }

}

function nextSequence() {
  level++;
  userClickedPattern = [];
  $("#level-title").text("Level " + level);
  let  randomNumber = Math.floor(Math.random() * 4);
  let  randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function playSound(name) {
  let  audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

//1. Create a new function called startOver().
function startOver() {

  //3. Inside this function, you'll need to reset the values of level, gamePattern and started let iables.
  level = 0;
  gamePattern = [];
  started = true;
}
 