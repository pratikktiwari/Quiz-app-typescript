//Initialise array for result
var attemptsArray:Object[] = [];

//Add items from Session Storage to array
for(let i:number = 0; i<5; i++){
    for(let j:number = 0; j<5; j++){
        attemptsArray.push((JSON.parse(sessionStorage.getItem(`page${i}`)))[j]);
    }
    
}
//Initialize obtained score to 0
var obtainedScore:number = 0;

//loop through all questions and check attempted answers and original answers
for(let index:number = 0; index < QuestionList.length; index++){
    const orgAnswer:Object[] = QuestionList[index]["answer"];
    const attemptedAnswer:Object[] = attemptsArray[index]["chosen"];
    if(orgAnswer.length === 1){
        //logic for radio buttons
        if(orgAnswer[0] == attemptedAnswer[0]){
            obtainedScore++;
        }
    }else{
        //logic for checkbox => with multiple answers
        if(orgAnswer.length === attemptedAnswer.length){
            var answerCheckboxCorrect:boolean = true;
            for(let i:number = 0;i<orgAnswer.length; i++){
                if(orgAnswer[i] != attemptedAnswer[i]){
                    answerCheckboxCorrect = false;
                    break;
                }
            }
            if(answerCheckboxCorrect) obtainedScore++;
        }
    }
}
//DOM manipulation for score
document.getElementById("scoreFinal").innerText = "Score : "+obtainedScore+"/25";
//DOM manipulation for percentage
document.getElementById("percentageFinal").innerText = "Percentage : "+((obtainedScore/25)*100)+" %";
//DOM manipulation for Pass / Fail
document.getElementById("passOrFail").innerText = "Based on your result, you are : "+((((obtainedScore/25)*100) >= 70)?"Pass":"Fail");

//Color change based on Pass / Fail
if(((obtainedScore/25)*100) >= 70){
    document.getElementById("passOrFail").style.color="green";
}else{
    document.getElementById("passOrFail").style.color="red";
}
//On click of reattempt button
document.getElementById("reAttemptBtn").addEventListener("click",() => {
    sessionStorage.clear();
    window.location.href = "index.html";
});
//Check and render time taken to DOM
const timeTaken:Object = JSON.parse(sessionStorage.getItem("timeTaken"));
const stringTimeTaken:string = parseInt(timeTaken["minutes"]) > 0 ? 
    (timeTaken["minutes"]+" minutes, "+timeTaken["seconds"]+" seconds"):
    (timeTaken["seconds"]+" seconds");

document.getElementById("timeTaken").innerText = "Time taken: "+stringTimeTaken;