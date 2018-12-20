var questions = [["Wie viele Dragonballs gibt es?", "7"],
                 ["Wie viele Winchesterbrüder gibt es?", "2"],
                 ["In welchem Jahr erscheint die letzte Staffel von Game of Thrones?", "2019"],
                 ["Wann Irima Nave", "2035"],
];
                 
function print(message) {
  document.write(message);
}

var answeredRight = [];
var correctAnswers = 0;
                 
for (var i = 0; i < questions.length; i++) {
       var answer = prompt(questions[i][0]);
       if (answer === questions[i][1]){
        correctAnswers++;
        answeredRight[i] = true;
       } else {
          answeredRight[i] = false;
       }
    }

print("<p>You answered " + correctAnswers + " questions correctly</p><br>");
print("<h2>You answered correctly: </h2>");
print("<ol>");
for (var i = 0; i < answeredRight.length; i++) {
    if (answeredRight[i] === true) {
     print("<li>" + questions[i][0] + "   Correct answer: " + questions[i][1] +  "</li>")
    }
}
print("</ol>");
print("<h2>You answered wrongly: </h2>");
print("<ol>");
for (var i = 0; i < answeredRight.length; i++) {
    if (answeredRight[i] === false) {
     print("<li>" + questions[i][0] + "   Correct answer: " + questions[i][1] +  "</li>")
    }
}
print("</ol>");