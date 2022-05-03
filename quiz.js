document.getElementsByClassName('questions')[0].style.display = "block"; // display first question

function nextq(id) { // function to display next question
  document.getElementsByClassName('questions')[id-1].style.display = "none";
  document.getElementsByClassName('questions')[id].style.display = "block";
}

function previousq(id) { // function to display previous question
document.getElementsByClassName('questions')[id-1].style.display = "block";
document.getElementsByClassName('questions')[id].style.display = "none";
}

function results() { // function to find if answer is correct 
  var correct = 0;
  for(var a = 1; a <= 5; a++) {
    var questions = document.getElementsByName('q'+a);
    for(var b = 0; b < questions.length; b++) {
      var answer = questions[b];
      if(answer.value == "correct" && answer.checked) { // if matches add 1 to correct count 
        correct++
      }
    }
  }
  document.getElementById("totalscore").innerHTML = correct;
}

  
  function totalscore() { // function to find if answer is correct 
    var correct = 0;
    for(var a = 1; a <= 5; a++) {
      var questions = document.getElementsByName('q'+a);
      for(var b = 0; b < questions.length; b++) {
        var answer = questions[b];
        if(answer.value == "correct" && answer.checked) { // if matches add 1 to correct count 
          correct++
        
        }
      }
    }
    alert("Congratulations! You got a score of " + correct); // popup with total correct answers
 }



function playsound(Congratulations) { // play congratulations sound when submitting quiz
  const audio = new Audio(Congratulations);
  audio.play();

}