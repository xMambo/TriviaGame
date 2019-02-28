//set up check function
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
  var question5 = document.quiz.question5.value;
	var correct = 0;

// if correct answer add to var correct
	if (question1 == "Admantium") {
		correct++;
}
	if (question2 == "Magneto") {
		correct++;
}	
	if (question3 == "Apocalypse") {
		correct++;
}
  if (question4 == "Sabertooth") {
    correct++;
}
  if (question5 == "The ability to project pyrotechnics") {
    correct++;
  }
  
  //display message after finished based on correct answers
	var messages = ["Excelsior!", "Not Bad", "You Dead!"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 5) {
		score = 1;
	}

	if (correct === 5) {
		score = 0;
	}

  //show message
	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	}
	

// timer for 2 minutes

function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;
  setInterval(function() {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
      alert("Time's up!");
    }
  }, 1000);
}


window.onload = function() {
  var twoMinutes = 60 * 2,
    display = document.querySelector("#time");
  startTimer(twoMinutes, display);
};
