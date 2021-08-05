function start() {
  console.log("Start() function started");
  index = 0;
  timer = setInterval(updateDisplay, time_interval);
  document.getElementById("startButton").disabled = true;
  document.getElementById("stopButton").disabled = false;
}

function stop() {
  console.log("Stop() function started");
  clearInterval(timer);
  document.getElementById("stopButton").disabled = true;
  document.getElementById("startButton").disabled = false;
}

function getData() {
  var loadedData = loadData();
  return loadedData;
}

function dataRow(legend, value, units) {
  msg = "<td>";
  msg += legend;
  msg += ": </td><td>";
  msg += value;
  msg += " " + units;
  msg += "</td>";
  return msg;
}

//Javascript to run countdown timer
function countdownTimer() {
  var currTime = 55;
  document.getElementById("countdown").innerHtml = currTime;
  currTime = currTime - 5;

  //Start timer at 50
  setTimeout(function () {
    document.getElementById("countdown").innerHTML = currTime;
    currTime = currTime - 5;
  }, 0);

  //Timer for 45
  setTimeout(function () {
    document.getElementById("countdown").innerHTML = currTime;
    currTime = currTime - 5;
  }, 5000);

  //Timer for 40
  setTimeout(function () {
    document.getElementById("countdown").innerHTML = currTime;
    currTime = currTime - 5;
  }, 10000);

  //Timer for 35
  setTimeout(function () {
    document.getElementById("countdown").innerHTML = currTime;
    currTime = currTime - 5;
  }, 15000);

  //Timer for 30
  setTimeout(function () {
    document.getElementById("countdown").innerHTML = currTime;
    currTime = currTime - 5;
  }, 20000);

  //Timer for 25
  setTimeout(function () {
    document.getElementById("countdown").innerHTML = currTime;
    currTime = currTime - 5;
  }, 25000);

  //Timer for 20
  setTimeout(function () {
    document.getElementById("countdown").innerHTML = currTime;
    currTime = currTime - 5;
  }, 30000);

  //Timer for 15
  setTimeout(function () {
    document.getElementById("countdown").innerHTML = currTime;
    currTime = currTime - 5;
  }, 35000);

  //Timer for 10
  setTimeout(function () {
    document.getElementById("countdown").innerHTML = currTime;
    currTime = currTime - 5;
  }, 40000);

  //Timer for 5
  setTimeout(function () {
    document.getElementById("countdown").innerHTML = currTime;
    currTime = currTime - 5;
  }, 45000);

  //Timer for Blastoff! when countdown finishes
  setTimeout(function () {
    document.getElementById("countdown").innerHTML = "Blastoff!";
    currTime = currTime - 5;
  }, 50000);
}

//function called playcraps, starts when button linked to playcraps() is clicked
function playcraps() {
  //defining var die1. Generates random number from 0 to 1. Ceiling rounds up and multiply by 6 to get 1 through 6 for dice.
  var die1 = Math.ceil(Math.random() * 6);
  //defining var die1. Read comment above.
  var die2 = Math.ceil(Math.random() * 6);
  //Taking div from html and naming it die1 for javascript use
  document.getElementById("die1sta").innerHTML = die1;
  //See comment above
  document.getElementById("die2sta").innerHTML = die2;
  //Defining the variable dieSum to be the total of both dice rolls
  var dieSum = die1 + die2;
  //Taking div from html and namking it dieSum
  document.getElementById("diceSum").innerHTML = dieSum;
  //if the sum of the dice equals 7 or 11, then do the line below
  if (dieSum == 7 || dieSum == 11) {
    //Change the div to say Craps! You Lose!
    document.getElementById("crapsStatus").innerHTML = "Craps! You lose!";
    //If both dice rolls equal the same number and is even, then do the line below
  } else if (die1 == die2 && die1 % 2 == 0) {
    //Change the div to say Doubles! You Win!
    document.getElementById("crapsStatus").innerHTML = "Doubles! You Win!";
  }
  //If if or else if above can't be met, then do the line below
  else {
    //Change the div to say You did not lose, in order to keep updates till you win or lose.
    document.getElementById("crapsStatus").innerHTML = "You did not lose";
  }
}

//for() loop for countdown timer. Counts down from 50 till 0 in 5 second increments. Once hits 0, says Blastoff!
//function btrCountdownTimer(){
//  var currTime = 50;
//  for(var i = 0; i < 10; i++){
//setTimeout(function(){
//  document.getElementById("countdown").innerHTML = currTime;
//  currTime = currTime -5;
//},5000 * i);
//  }
//  setTimeout(function(){
//  document.getElementById("countdown").innerHTML = "Blastoff!";
//},50000);
//}

//If, else if, else loop for countdown timer. Starting at 50 seconds, it counts down to 0. Once it hits 25, it will display "Warning less than ½ way to launch, time left = TIME LEFT" until it hits 0. Once it hits 0, it will say "Blastoff!"
function btrCountdownTimer() {
  var currTime = 50;
  for (var i = 0; i < 11; i++) {
    if (i == 10) {
      setTimeout(function () {
        document.getElementById("countdown").innerHTML = "Blastoff!";
        currTime = currTime - 5;
      }, 5000 * i);
    } else if (i > 4) {
      setTimeout(function () {
        document.getElementById("countdown").innerHTML =
          "Warning less than ½ way to launch, time left = " + currTime;
        currTime = currTime - 5;
      }, 5000 * i);
    } else {
      setTimeout(function () {
        document.getElementById("countdown").innerHTML = currTime;
        currTime = currTime - 5;
      }, 5000 * i);
    }
  }
}
function sandBox() {
  var a = 7;
  if (a == 5) {
    document.getElementById("sandbox").innerHTML = "A does in fact equal 5";
  } else {
    document.getElementById("sandbox").innerHTML = "A does not in fact equal 5";
  }
}

//function to create a new console log to make sure the sound button works correctly.
//function is meant to play the mp3 file us-lab-background.mp3.
//plays the function sound
function playStation() {
  console.log("play space station sounds");
  mySound = new sound("us-lab-background.mp3");
  mySound.play();
}

//function in order to play the mp3 file. Sets rules for the playback such as no controls, preloading the audio in memory before playing and having a play and stop function to play and stop the audio.
function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "audio");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function () {
    this.sound.play();
  };
  this.stop = function () {
    this.sound.pause();
  };
}
