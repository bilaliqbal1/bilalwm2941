
function startTime(){
    var startMinutes = 1.5;
    var time = startMinutes * 60;
    var timer = document.getElementById("timer");

    function updateCountDown(){
        var minutes = Math.floor(time / 60)
        var seconds = time % 60;
        
        if(seconds < 10){
            seconds = "0"+seconds;
        }
        if(minutes < 10){
            minutes = "0"+minutes;
        }
        
        timer.innerHTML = minutes + ":" + seconds;
        time--;

        if(minutes == 00 && seconds == 00){
            alert("Oopps!! Time Up");
            window.location.href = "result.html";
        }
    }
    setInterval(updateCountDown, 1000);
}

function showQuestion(e) {
    
    // show question 
    var questionElement = document.getElementById("question");
    questionElement.innerHTML = questions[e].question;

    // show option

    var optionElement = document.getElementsByTagName("span");
    
    console.log(optionElement);
    for (let i = 0; i < optionElement.length; i++) {
        optionElement[i].innerHTML = questions[e].option[i];
                
    }
}
var currentQuestion = "";
var score = 0;
var countQuestion = 0;
var totalQuestion = questions.length;
function nextQuestion(){
    var selectOption = document.querySelector("input[type=radio]:checked");
    if (!selectOption) {
        alert("Please select your answer");
        return;
    }
    
    checkAnswer(countQuestion);
   
    countQuestion++;
    if(countQuestion <= questions.length-1){
            showQuestion(countQuestion);
    }
    if (countQuestion == totalQuestion - 1) {
        nextButton.textContent = "Finish";
    }

    removeactiveclass();
    setResult();
    
}




function activeclass(e){
    removeactiveclass()
    e.classList.add("active")
   
}

function removeactiveclass(){
    var active = document.getElementsByClassName("active")
    for (var i = 0; i < active.length; i++) {
        active[i].classList.remove("active")
        
    }
}

function checkAnswer(x){
    var active = document.getElementsByClassName("active");
    if(active[0].innerHTML == questions[x].answer){
        score = score + 10;
        console.log(score)
    }
}   


function setResult(){
    if(countQuestion == questions.length){
        window.location.href = "result.html";
    }
    var result = document.getElementById("result");
    sessionStorage.setItem("userscore", score);
}

function showResult(){
    var cs = sessionStorage.getItem("userscore");
    result.innerHTML = "You correct answer are "+ cs +" out of 5";

}