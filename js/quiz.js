var questions = [["Wie viele Dragonballs gibt es?", "7"],
                 ["Wie viele Winchesterbrüder gibt es?", "2"],
                 ["In welchem Jahr erscheint die letzte Staffel von Game of Thrones?", "2019"],
                 ["Wann Irima Nave", "2035"],
];
                 
function print(message) {
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = message;               
}

var answeredRight = [];
var correctAnswers = 0;
var html = "";
                 
for (var i = 0; i < questions.length; i++) {
       var answer = prompt(questions[i][0]);
       if (answer === questions[i][1]){
        correctAnswers++;
        answeredRight[i] = true;
       } else {
          answeredRight[i] = false;
       }
    }

function buildCorrectList(array) {
  var correctlyAnsweredHTML = "<ol>";
  for (var i = 0; i < array.length; i++) {
    if (array[i] === true) {
     correctlyAnsweredHTML +="<li>" + questions[i][0] + "</li>";
    }
  }
  correctlyAnsweredHTML += "</ol>";
  return correctlyAnsweredHTML;
}

function buildWrongList(array) {
  var wronglyAnsweredHTML = "<ol>";
  for (var i = 0; i < array.length; i++) {
    if (array[i] === false) {
     wronglyAnsweredHTML +="<li>" + questions[i][0] + "</li>";
    }
  }
  wronglyAnsweredHTML += "</ol>";
  return wronglyAnsweredHTML;
}



html += "<p>You answered " + correctAnswers + " questions correctly</p><br>";
html += "<h2>You answered correctly: </h2>";
html += buildCorrectList(answeredRight);
html += "<h2>You answered wrongly: </h2>";
html += buildWrongList(answeredRight);

print(html);