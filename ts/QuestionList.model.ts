//Interface for Single Question
interface QuestionInterface {
    id : number;
    question : string;
    options : Array<string>;
    answer : Array<number>;
}
//Object implementing the interface
const QuestionList : QuestionInterface[] = [
    {
        id:1,
        question:"How to write hello world in CPP?",
        options:["cout<<\"Hello world\"",
                "printf(\"Hello world\")",
                "print \"Hello World\""],
        answer:[1]
    },
    {
        id:2,
        question:"How to write hello world in Python?",
        options:["cout<<\"Hello world\"",
                "printf(\"Hello world\")",
                "print \"Hello World\""],
        answer:[3]
    },
    {
        id:3,
        question:"How to write hello world in Java?",
        options:["System.print(\"Hello world\")",
                "System.out.println(\"Hello world\")",
                "print \"Hello World\""],
        answer:[1,2]
    },
    {
        id:4,
        question:"How to write hello world in Java Script?",
        options:["console.log('Hello World')",
                "System.out.println(\"Hello world\")",
                "print \"Hello World\""],
        answer:[1]
    },
    {
        id:5,
        question:"Does java supports Interfaces?",
        options:["Yes",
                "No",
                "Depends on operating system"],
        answer:[1]
    },
    {
        id:6,
        question:"What is the type of : 2.34 in javascript?",
        options:["Float",
                "Number",
                "Double"],
        answer:[2]
    },
    {
        id:7,
        question:"How to create object in JavaScript?",
        options:["let obj = new ClassName();",
                "let obj = {}",
                "let obj = new Object()"],
        answer:[1,2,3]
    },
    {
        id:8,
        question:"Which is the optimum searching algorithm?",
        options:["Linear Search",
                "Fast Search",
                "Binary Search"],
        answer:[3]
    },
    {
        id:9,
        question:"Is java same as Javascript?",
        options:["Yes, they are same",
                "False",
                "Same in Linux"],
        answer:[2]
    },
    {
        id:10,
        question:"Which sorting algorithm given n logn time complexity?",
        options:["Merge Sort",
                "Heap Sort",
                "Bubble Sort"],
        answer:[1,2]
    },
    {
        id:11,
        question:"What is the command to create a new folder/ directory?",
        options:["mkdir",
                "createDirectory",
                "makeFolder"],
        answer:[1]
    },
    {
        id:12,
        question:"What will be the output of following in JS: <code>2===\"2\"</code>",
        options:["True",
                "False",
                "Browser dependent"],
        answer:[2]
    },
    {
        id:13,
        question:"Which of the following are Object in javascript?",
        options:["Array",
                "Function",
                "The one declared using new keyword"],
        answer:[1,2,3]
    },
    {
        id:14,
        question:"How to comment code in Javascript?",
        options:["using //",
                "using /* */",
                "using <!-  ->"],
        answer:[1,2]
    },
    {
        id:15,
        question:"What is typescript?",
        options:["It is script tag with type attribute",
                "Superset of javascript, with defined types",
                "Same as javascript"],
        answer:[2]
    },
    {
        id:16,
        question:"How to declare an integer value in typescript?",
        options:["int x;",
                "Integer x;",
                "let x: number"],
        answer:[3]
    },
    {
        id:17,
        question:"How to compile typescript?",
        options:["tsc filename",
                "tsc -w filname",
                "tsc -w"],
        answer:[1,2,3]
    },
    {
        id:18,
        question:"What is the type of &lt;button> tag in typescript?",
        options:["Button",
                "HTMLElement",
                "ButtonTag"],
        answer:[2]
    },
    {
        id:19,
        question:"How to decalre function with integer return type in TypeScript?",
        options:["function sum():number{}",
                "function number:sum(){}",
                "int sum(){}"],
        answer:[1,2]
    },
    {
        id:20,
        question:"How to pass number as parameter in TypeScript functions?",
        options:["function sum(x:number, y:number){}",
                "int sum(int x, int y){}",
                "function sum(int x, int y){}"],
        answer:[1]
    },
    {
        id:21,
        question:"What is the extension of TypeScript file?",
        options:[".tc",
                ".tsx",
                ".ts"],
        answer:[3]
    },
    {
        id:22,
        question:"How to declare Integer Array in TypeScript?",
        options:["let arr = Array(int);",
                "let arr:number[];",
                "let arr:Array<number>"],
        answer:[2,3]
    },
    {
        id:23,
        question:"Which of the following are benefits of TypeScript?",
        options:["Reduces bugs in production",
                "Makes things complex without reason",
                "Helps in ensuring type safety"],
        answer:[1,3]
    },
    {
        id:24,
        question:"What is the full form of ES6?",
        options:["Ecma Script 6",
                "Engineer Script 6",
                "Elegant Script 6"],
        answer:[1]
    },
    {
        id:25,
        question:"TypeScript was developed by?",
        options:["Google",
                "Microsoft",
                "Facebok"],
        answer:[2]
    }
    
];