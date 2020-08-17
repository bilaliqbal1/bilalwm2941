var currentQuestion = 0;
var score = 0;

var container = document.getElementById('quizContainer');
var question = document.getElementById('question');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var option4 = document.getElementById('option4');

var totalQuestion = questions.length;

var nextButton = document.getElementById('nextButton');
var result = document.getElementById('result');

function showQuestion(questionIndex){
    var q = questions[questionIndex];
    question.textContent = (questionIndex + 1 ) + '. ' +q.question;
    option1.textContent = q.option1;
    option2.textContent = q.option2;
    option3.textContent = q.option3;
    option4.textContent = q.option4;
}
function nextQuestion(){
    var selectOption = document.querySelector("input[type=radio]:checked");
    if (!selectOption) {
        alert("Please select your answer");
        return;
    }
    var answer = selectOption.value;
    if (questions[currentQuestion].answer == answer) {
        score+=10;
    }
    selectOption.checked=false;
    currentQuestion++;
    if (currentQuestion == totalQuestion - 1) {
        nextButton.textContent = "Finish";
    }
    if (currentQuestion == totalQuestion) {
        // container.style.display = "none";
        // result.style.display = " ";
        // result.textContent = "Your Score: " + score;
        // return;
        alert(score)
    }
    showQuestion(currentQuestion);

}
showQuestion(currentQuestion);