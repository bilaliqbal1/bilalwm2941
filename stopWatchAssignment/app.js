// define variables to hold time values
var hour= 0;
var min=0;
var sec=0;
var minsec=0;
var hourhead = document.getElementById("hour");
var minhead = document.getElementById("min");
var sechead = document.getElementById("sec");
var minsechead = document.getElementById("minsec");
var lapscontainer = document.getElementById()
var interval;
var status = "stopped"

// start stopwatch function
function stopwatch(){
    minsec++;
    minsechead.innerHTML = minsec;
    if ((minsec/60)===1) {
        sec++;
        sechead.innerHTML = sec;       
    sechead.innerHTML = sec;
        sechead.innerHTML = sec;       
        minsec=0;
    }
    else if ((sec/60)===1) {
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
    interval = setInterval(stopwatch,10)
    document.getElementById("toggle").innerHTML="<i class='fa fa-pause-circle-o'></i>"
    status = "started"
    }
    else{
        clearInterval(interval)
        document.getElementById("toggle").innerHTML="<i class='fa fa-play' ></i>"
        status = "stopped"
    }
}
function reset (){
    clearInterval(interval)
    hour=0;
    min=0;
    sec=0;
    minsec=0
    hourhead.innerHTML = hour;
    minhead.innerHTML = min;
    sechead.innerHTML = sec;
    minsechead.innerHTML = minsec;
    document.getElementById("toggle").innerHTML="<i class='fa fa-play' ></i>";
}

// function lap(){
//     if (start) {
//         var li = document.getElementById('li');
//         li.innerText=stopwatch();

//     }
// }
