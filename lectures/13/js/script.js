var questions = [{
    question : "When a user views a page containing a JavaScript program, which machine actually executes the script?",
    choices : [ "The User's machine running a Web browser",
        "The Web server",
        "A central machine deep within Netscape's corporate offices",
        "None of the above"],
    correctAnswer : 0
},{
    question : "Which of the following can't be done with client-side JavaScript?",
    choices : [ "Validating a form",
        "Sending a form's contents by email",
        "Storing the form's contents to a database file on the server",
        "None of the above"],
    correctAnswer : 2
},{
    question : "Using _______ statement is how you test for a specific condition",
    choices : [ "select",
        "if",
        "for",
        "none of the above"],
    correctAnswer : 1
}, {
        question : "which programming language is used to make a website responsive?",
        choices : [ "select",
            "javascript",
            "PHP",
            "bootstrap"],
        correctAnswer : 2
},
    {
        question : "Why we use CSS in our website?",
        choices : [ "select",
            "for styling",
            "to make it responsive",
            "for functioning"],
        correctAnswer : 0
    }];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;
displayCurrentQuestion();
document.getElementById("quiz-message").style.display = 'none';
function displayNext() {
    if(currentQuestion===2)
    {
        displayScore();
    }
    alert(correctAnswers);
    currentQuestion++;
    displayCurrentQuestion();
}


function displayCurrentQuestion() {
    document.getElementById("question").innerHTML = questions[0].question;
    var z = document.getElementById("choice-list");
    for (var i = 0; i < 4; i++) {
        z.innerHTML += '<li>' + '<input type="radio" name="checked">' + questions[currentQuestion].choices[i] + '</li>';
    }
    if (document.getElementById("opt1").checked) {
        if (questions[currentQuestion].correctAnswer === document.getElementById("opt1").value) {
            correctAnswers++;
        }
    }
    else if (document.getElementById("opt2").checked) {
        if (questions[currentQuestion].correctAnswer === document.getElementById("opt2").value) {
            correctAnswers++;
        }
    }
    else if (document.getElementById("opt3").checked) {
        if (questions[currentQuestion].correctAnswer === document.getElementById("opt3").value) {
            correctAnswers++;
        }
    }
    else if (document.getElementById("opt4").checked) {
        if (questions[currentQuestion].correctAnswer === document.getElementById("opt4").value) {
            correctAnswers++;
        }
    }
    else {
        displayCurrentQuestion();
    }

}


function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}
function displayScore() {
    document.getElementById("result").innerHTML = "you scored: " + correctAnswers + " out of: " + questions.length;
    document.getElementById("result").style.display = 'block';
}
function hideScore() {
    document.getElementById("result").style.display = 'none';
}