//initalization of answers in sessionStorage
//====================================================================
for(let i:number = 0; i<=4;i++){
    let dataArr:Object[] = [];
    for(let j:number = 0; j<5; j++){
        dataArr.push({id:j, chosen:[999]});
    }
    sessionStorage.setItem(`page${i}`,JSON.stringify(dataArr));
}
//====================================================================
//initialize starting page number
var pageNum:number = 0;
//main quiz container to place questions in DOM
const container : HTMLElement  = document.getElementById("quizContainer");

//function to render next 5 questions on page
function viewQuestionNumber(pageNum : number):void{

    container.innerHTML = "";
    // questions per page
    const startQuestion:number = pageNum * 5;
    
    //check for current page session storage
    var sessionStorageCurrentPage:Object[] = [];

    if(sessionStorage.getItem(`page${pageNum}`) == undefined){
        //if session storage is undefined => don't do anything
    }else{
        //fetch sessionStorage answers to variable
        sessionStorageCurrentPage  = JSON.parse(sessionStorage.getItem(`page${pageNum}`));
    }

    for(let current:number = startQuestion; current < startQuestion+5 && current < QuestionList.length; current++){
        const currentQDetails = QuestionList[current];

        //if radio button => length of answer = 1
        if(currentQDetails["answer"].length === 1){
            //check if some option was selected and mark it checked
            const currentChecked:number = parseInt(sessionStorageCurrentPage[current%5]["chosen"][0]);
            //DOM Manipulation
            container.innerHTML += `
                <div class="singleQuestion">
                    <div class="questionDiv">
                        ${currentQDetails["id"]}. 
                        ${currentQDetails["question"]}
                    </div>
                    <ul class="optionsUL">
                        <li>
                        <input type="radio" ${currentChecked===1?"checked":""} value="1" name="answerOption_${currentQDetails["id"]}"/>
                            ${currentQDetails["options"][0]}
                        </li>
                        <li>
                            <input type="radio" ${currentChecked===2?"checked":""} value="2" name="answerOption_${currentQDetails["id"]}"/>
                            ${currentQDetails["options"][1]}
                        </li>
                        <li>
                            <input type="radio" ${currentChecked===3?"checked":""} value="3" name="answerOption_${currentQDetails["id"]}"/>
                            ${currentQDetails["options"][2]}
                        </li>
                    </ul>
                </div>
            `;
        }
        //Checkbox => More than 1 answers
        else{
            const currentChecked:string = JSON.stringify(sessionStorageCurrentPage[current%5]["chosen"]);
            container.innerHTML += `
                <div class="singleQuestion">
                    <div class="questionDiv">
                        ${currentQDetails["id"]}. 
                        ${currentQDetails["question"]}
                    </div>
                    <ul class="optionsUL">
                        <li>
                            <input type="checkbox" ${currentChecked.includes("1")&&"checked"} value="1" name="answerOption_${currentQDetails["id"]}[]"/>
                            ${currentQDetails["options"][0]}
                        </li>
                        <li>
                            <input type="checkbox" ${currentChecked.includes("2")&&"checked"} value="2" name="answerOption_${currentQDetails["id"]}[]"/>
                            ${currentQDetails["options"][1]}
                        </li>
                        <li>
                            <input type="checkbox" ${currentChecked.includes("3")&&"checked"} value="3" name="answerOption_${currentQDetails["id"]}[]"/>
                            ${currentQDetails["options"][2]}
                        </li>
                    </ul>
                </div>
            `;
        }  
    }
    
}
//Start with page Number 0
viewQuestionNumber(0);
//Highlight [change color] current page in the pagination
highlightCurrentPage();

//DOM previous and next buttons
const prevPageButton: HTMLElement = document.getElementById("prevPageButton");
const nextPageButton: HTMLElement = document.getElementById("nextPageButton");

//onClick of previous button
prevPageButton.addEventListener("click",()=>{
    //if on the first page => no previous page
    if(pageNum <= 0) return;

    //Save attemps to session storage

    checkQuestionAttempt();
    //else decrement page and render it
    pageNum--;
    highlightCurrentPage();
    viewQuestionNumber(pageNum);
});
//onClick of next button
nextPageButton.addEventListener("click",()=>{
    //if page number is lesser than equal to 5
    if(pageNum >= QuestionList.length/5 - 1) return;

    checkQuestionAttempt();
    pageNum++;

    highlightCurrentPage();
    viewQuestionNumber(pageNum);
});
function checkQuestionAttempt() :void{

    let li_of_names:string[]  = [];

    document.querySelectorAll("ul").forEach((ulItem)=>{
        //select all li option items
        const name:string = ulItem.querySelector("li input").getAttribute("name");
        li_of_names.push(name);

    })
    //array to push selected options in
    let selectedOptions:Object[] = [];

    let checkBoxes = [];
    //iterating through all checkboxes

    for(let i:number = 0; i<li_of_names.length; i++){
        if(li_of_names[i].includes("[]")){
            const checkbox:NodeList = document.querySelectorAll(`input[name="${li_of_names[i]}"]`);

            let singleCheckBoxList:string[] = [];

            checkbox.forEach(element => {
                if((element as HTMLInputElement).checked == true){
                    singleCheckBoxList.push((element as HTMLInputElement).getAttribute("value"));
                }
            });
            selectedOptions.push({id: i + 1, chosen:singleCheckBoxList});
        }
        else{
            //check if the question is attempted
            if(document.querySelector(`input[name="${li_of_names[i]}"]:checked`)){
                const checked = document.querySelector(`input[name="${li_of_names[i]}"]:checked`).getAttribute("value");
                selectedOptions.push( {id:i + 1, chosen:[checked]} );
            }else{
                selectedOptions.push( {id:i + 1, chosen:[]} );
            }
        }
    }
    //save attempted options to session storage page wise
    sessionStorage.setItem(`page${pageNum}`,JSON.stringify(selectedOptions))

}
//highlight current page number
function highlightCurrentPage():void{
    document.getElementById("pageNumbers").querySelectorAll("li").forEach((item,index)=>{
        if(index == pageNum){
            item.style.backgroundColor = "blue";
        }else{
            item.style.backgroundColor = "blueviolet";
        }
    })
}
