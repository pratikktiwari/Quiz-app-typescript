//Total time of 30 minutes
var timeCount:number = 1000 * 60 * 30;

//Initialize starting to 0
var millisecond:number = 0, second:number = 0, minute:number = 0;

function timer(){
    if ((millisecond += 10) == 1000) {
        millisecond = 0;
        second++;
        timeCount -= 1000;
    }
    if (second == 60) {
        second = 0;
        minute++;
    }
    if(timeCount === 0){
        clearInterval(interval);
        alert("Time's up !!!");
        window.location.href = "Result.html";
    }
    //DOM manipulation for Minute / seconds => Left time
    document.getElementById("timerMinute").innerText = ""+(29 - minute);
    document.getElementById("timerSecond").innerText = ""+(60 - second);
}
var interval:number = setInterval(() => timer(), 10);
//Set timer with setInterval()

//onClick of submit button
document.getElementById("submmitButton").addEventListener("click",()=>{
    checkQuestionAttempt();
    //save time taken to session storage
    sessionStorage.setItem("timeTaken",JSON.stringify({"minutes":minute,"seconds":second}));
    clearInterval(interval);
    window.location.href = "Result.html";
});