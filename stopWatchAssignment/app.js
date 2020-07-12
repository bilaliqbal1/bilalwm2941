// define variables to hold time values
var hour= 0;
var min=0;
var sec=0;
var hourhead = document.getElementById("hour");
var minhead = document.getElementById("min");
var sechead = document.getElementById("sec");
var interval;
var status = "stopped"

// start stopwatch function
function stopwatch(){
    sec++;
    sechead.innerHTML = sec;
    if ((sec/60)===1) {
        min++;
        minhead.innerHTML = min;       
        sec=0;
    }
    else if ((min/60)===1) {
        hour++;
        hourhead.innerHTML = hour;
        min=0;
        
    }
}
function start(){
    if(status === "stopped"){
    interval = setInterval(stopwatch,1000)
    document.getElementById("toggle").innerHTML="stop"
    status = "started"
    }
    else{
        clearInterval(interval)
        document.getElementById("toggle").innerHTML="start"
        status = "stopped"
    }
}
function reset (){
    clearInterval(interval)
    hour=0;
    min=0;
    sec=0;
    hourhead.innerHTML = hour;
    minhead.innerHTML = min;
    sechead.innerHTML = sec;
    start(); 
}

// function stop(){
//     clearInterval(interval)
// }