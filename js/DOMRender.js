//initalization of answers in sessionStorage
//====================================================================
for (var i = 0; i <= 4; i++) {
    var dataArr = [];
    for (var j = 0; j < 5; j++) {
        dataArr.push({ id: j, chosen: [999] });
    }
    sessionStorage.setItem("page" + i, JSON.stringify(dataArr));
}
//====================================================================
//initialize starting page number
var pageNum = 0;
//main quiz container to place questions in DOM
var container = document.getElementById("quizContainer");
//function to render next 5 questions on page
function viewQuestionNumber(pageNum) {
    container.innerHTML = "";
    // questions per page
    var startQuestion = pageNum * 5;
    //check for current page session storage
    var sessionStorageCurrentPage = [];
    if (sessionStorage.getItem("page" + pageNum) == undefined) {
        //if session storage is undefined => don't do anything
    }
    else {
        //fetch sessionStorage answers to variable
        sessionStorageCurrentPage = JSON.parse(sessionStorage.getItem("page" + pageNum));
    }
    for (var current = startQuestion; current < startQuestion + 5 && current < QuestionList.length; current++) {
        var currentQDetails = QuestionList[current];
        //if radio button => length of answer = 1
        if (currentQDetails["answer"].length === 1) {
            //check if some option was selected and mark it checked
            var currentChecked = parseInt(sessionStorageCurrentPage[current % 5]["chosen"][0]);
            //DOM Manipulation
            container.innerHTML += "\n                <div class=\"singleQuestion\">\n                    <div class=\"questionDiv\">\n                        " + currentQDetails["id"] + ". \n                        " + currentQDetails["question"] + "\n                    </div>\n                    <ul class=\"optionsUL\">\n                        <li>\n                        <input type=\"radio\" " + (currentChecked === 1 ? "checked" : "") + " value=\"1\" name=\"answerOption_" + currentQDetails["id"] + "\"/>\n                            " + currentQDetails["options"][0] + "\n                        </li>\n                        <li>\n                            <input type=\"radio\" " + (currentChecked === 2 ? "checked" : "") + " value=\"2\" name=\"answerOption_" + currentQDetails["id"] + "\"/>\n                            " + currentQDetails["options"][1] + "\n                        </li>\n                        <li>\n                            <input type=\"radio\" " + (currentChecked === 3 ? "checked" : "") + " value=\"3\" name=\"answerOption_" + currentQDetails["id"] + "\"/>\n                            " + currentQDetails["options"][2] + "\n                        </li>\n                    </ul>\n                </div>\n            ";
        }
        //Checkbox => More than 1 answers
        else {
            var currentChecked = JSON.stringify(sessionStorageCurrentPage[current % 5]["chosen"]);
            container.innerHTML += "\n                <div class=\"singleQuestion\">\n                    <div class=\"questionDiv\">\n                        " + currentQDetails["id"] + ". \n                        " + currentQDetails["question"] + "\n                    </div>\n                    <ul class=\"optionsUL\">\n                        <li>\n                            <input type=\"checkbox\" " + (currentChecked.includes("1") && "checked") + " value=\"1\" name=\"answerOption_" + currentQDetails["id"] + "[]\"/>\n                            " + currentQDetails["options"][0] + "\n                        </li>\n                        <li>\n                            <input type=\"checkbox\" " + (currentChecked.includes("2") && "checked") + " value=\"2\" name=\"answerOption_" + currentQDetails["id"] + "[]\"/>\n                            " + currentQDetails["options"][1] + "\n                        </li>\n                        <li>\n                            <input type=\"checkbox\" " + (currentChecked.includes("3") && "checked") + " value=\"3\" name=\"answerOption_" + currentQDetails["id"] + "[]\"/>\n                            " + currentQDetails["options"][2] + "\n                        </li>\n                    </ul>\n                </div>\n            ";
        }
    }
}
//Start with page Number 0
viewQuestionNumber(0);
//Highlight [change color] current page in the pagination
highlightCurrentPage();
//DOM previous and next buttons
var prevPageButton = document.getElementById("prevPageButton");
var nextPageButton = document.getElementById("nextPageButton");
//onClick of previous button
prevPageButton.addEventListener("click", function () {
    //if on the first page => no previous page
    if (pageNum <= 0)
        return;
    //Save attemps to session storage
    checkQuestionAttempt();
    //else decrement page and render it
    pageNum--;
    highlightCurrentPage();
    viewQuestionNumber(pageNum);
});
//onClick of next button
nextPageButton.addEventListener("click", function () {
    //if page number is lesser than equal to 5
    if (pageNum >= QuestionList.length / 5 - 1)
        return;
    checkQuestionAttempt();
    pageNum++;
    highlightCurrentPage();
    viewQuestionNumber(pageNum);
});
function checkQuestionAttempt() {
    var li_of_names = [];
    document.querySelectorAll("ul").forEach(function (ulItem) {
        //select all li option items
        var name = ulItem.querySelector("li input").getAttribute("name");
        li_of_names.push(name);
    });
    //array to push selected options in
    var selectedOptions = [];
    var checkBoxes = [];
    var _loop_1 = function (i) {
        if (li_of_names[i].includes("[]")) {
            var checkbox = document.querySelectorAll("input[name=\"" + li_of_names[i] + "\"]");
            var singleCheckBoxList_1 = [];
            checkbox.forEach(function (element) {
                if (element.checked == true) {
                    singleCheckBoxList_1.push(element.getAttribute("value"));
                }
            });
            selectedOptions.push({ id: i + 1, chosen: singleCheckBoxList_1 });
        }
        else {
            //check if the question is attempted
            if (document.querySelector("input[name=\"" + li_of_names[i] + "\"]:checked")) {
                var checked = document.querySelector("input[name=\"" + li_of_names[i] + "\"]:checked").getAttribute("value");
                selectedOptions.push({ id: i + 1, chosen: [checked] });
            }
            else {
                selectedOptions.push({ id: i + 1, chosen: [] });
            }
        }
    };
    //iterating through all checkboxes
    for (var i = 0; i < li_of_names.length; i++) {
        _loop_1(i);
    }
    //save attempted options to session storage page wise
    sessionStorage.setItem("page" + pageNum, JSON.stringify(selectedOptions));
}
//highlight current page number
function highlightCurrentPage() {
    document.getElementById("pageNumbers").querySelectorAll("li").forEach(function (item, index) {
        if (index == pageNum) {
            item.style.backgroundColor = "blue";
        }
        else {
            item.style.backgroundColor = "blueviolet";
        }
    });
}
