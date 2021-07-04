var Question = /** @class */ (function () {
    function Question(name, option1, option2, option3) {
        this.name = name;
        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
    }
    return Question;
}());
var singleQuestion = new Question("Hello world??", "A", "B", "C");
