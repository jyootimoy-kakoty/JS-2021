/*What is JS */
//JS is a high-level, object-oriented, multi-paradigm programming language.
//High level means there are lot of abstractions, we don't need to worry about how memory & cache is been utilized
//and how data is been extracted/modified.
//Object-oriented because JS is based on objects for storing most kinds of data.
//Multi-paradigm as it's very flexible and varsatile. We could use different styles of programming such as imperative/declarative.
//Styles means different ways of structuring our codes basically.

/*Core Technologies of Web*/
//There may be a question what JS does. And to answer that question, let's actually look at a three core technologies of the web.
//They are HTML, CSS and of course, JavaScript.
//So these three technologies all work together to create beautiful, interactive and dynamic websites or web applications.
//Now the HTML is responsible for the content of the page.
//So the text, the images, the buttons, and all the contents that you see on the webpage is always written in HTML.
//Then the CSS is responsible for the presentation of that content. So basically for styling and for laying out the elements on a webpage.
//And then, JavaScript is the real programming language of the internet. It allows developers to add dynamic & interactive effects
//to any webpage. We also use it to manipulate the content or the CSS, load data from remote servers and build entire applications
//in the browser, which we then call web applications.
//ES stands for ECMA Script. ECMA International standardizes JS programming language.

alert("good evening!!");
let js = "good evening!";
if (js == "good evening") alert("hi there!");
console.log(js);

//Constant variable names are written in capital
let PI = 22/7;
console.log(PI);
let language, a=null;

//Data types
console.log('type of js: ' + typeof(js));
console.log('type of PI: ' + typeof(PI));
console.log('type of language: ' + typeof(language));
console.log('type of a: ' + typeof(a));

//Variables
var x = 5;
const y = 6;
let z = 7;
console.log('x = ' + x);
console.log('y = ' + y);
console.log('z = ' + z);

//x=8; y=9; z=10; //can't change value of y

//Basic operations
console.log('9');
console.log(typeof('9'));
console.log('9'- 5);
console.log(typeof('9'- 5));
console.log('9'+ 5);
console.log(typeof('9'+ 5));
console.log(9 - 5);
console.log(typeof(9 - 5));
console.log('9' - '5');
console.log(typeof('9'- '5'));
console.log('9' + '5');
console.log(typeof('9'+ '5'));
console.log('19' - '13' + '17');
console.log('19' + '13' + '17');
console.log('19' - '13' + 17);
console.log('19' + '13' + 17);
console.log('123' < 57);
console.log(123 < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);
console.log('9'* 5);
console.log(typeof('9'* 5));
console.log('9' * '5');
console.log(typeof('9' * '5'));
console.log(9 / '5');
console.log(typeof(9 / '5'));
console.log('9' / '5');
console.log(typeof('9'/ '5'));
let isIsland = false;
console.log('typeof isIsland: ' + typeof isIsland);

let b = '10', c = 10;
//== vs === operation
if (b == c) console.log("value same: " + b + " " + c);
if (b === c) console.log("data type same: " + b + " " + c);
console.log(typeof(b) + " " + typeof(c));


//Strings and Template Literals
const country = 'India', continent = 'Asia', population = 1300000000;
const description = `${country} is in ${continent}, and its population is ${population}`;
console.log(description);

//Everyting in JS is either an object or a primitive.
//data types.
//So there are seven primitive data types:
//number, string, boolean, undefined, null, symbol (ES2015) and bigint (ES2020).
//We can change the type of a variable easily.
//I need to point out that we actually don't even have to declare variables at all.
//We can just write some variable and assign a value to it.

/*BMI calculator*/
let weight, height, heightF, heightI, BMI;
//alert(`enter weight (Kg): ${weight = Event.key}`);
//alert(`enter height (Feet): ${height = Event.key}`);
weight = prompt("Please enter your Weight (Kg.Gm)", 0.00);
heightF = prompt("Please enter your Height (Feet.Inch)", 0.00);
heightI = heightF;
heightF = Math.floor(heightF);
heightI -= heightF;
console.log(heightF, heightI, height);
heightI /= .12;
height = heightF + heightI;
console.log(heightF, heightI, height);
height = 0.3048 * height;
console.log(heightF, heightI, height);
BMI = weight / height ** 2;
console.log(`BMI: ${BMI}👌`);//Press Windows + . for the emoji window pop-up

/*Strict Nodes*/
//Always just put strict mode in the beginning of your scripts to write more secure code.
//And when secure, I mean that strict mode makes it easier for developers to avoid accidental errors.
//So basically it helps us to avaoid introducing bugs into our code, that's because of 2 reasons:
//Firstly, strict mode forbids us to do certain things.
//Secondly, it will actually create visible errors for us in certain situations in which without 
//strict mode JS will simply fail silently without letting us know that we did a mistake.

//'use strict';

/*
let callLetters = true;
if(callLetter == true) console.log('you can enter'); //'s' missing at the end of the variable
*/

/*Function*/
function hello(){
    console.log('hi there!');    
}

hello();
hello();

/*Function expression works the same way as function declaration*/
function def1(val){
    return `you have entered ${val}`;
}
console.log(def1(5));

//Function expression
const def2 = function (val){
    return `you have entered ${val}`;
}
console.log(def2(10));

/*Arrow Function*/
const def3 = val => `you have entered ${val}`;
console.log(def3(100));

//Arrow Function with 2 variables
const def4 = (val1, val2) => {
    return `you have entered ${val1} and ${val2}`;
}
console.log(def4(100, 200));

/*Arrays*/
const fruit = ['apple', 'mango', 'banana'];
console.log(fruit[0], fruit[1], fruit[2]);
console.log(fruit);
console.log(fruit[3], fruit[-1]);

//"const" definition binds only to primitive data types
//Hence, we can modify the value of a array member, where array declared as const
fruit[0] = 'grapes';
console.log(fruit);

//Array support disimilar data types in one construct
const array1 = ['maruti', 'tata', 'mahindra', 2021, 'tesla', 340/34];
console.log(array1);
console.log(array1 + 4);
console.log(5 + array1 + 4);
console.log(array1 * 4);//NaN stands for not a number
console.log(array1 - 4);//NaN stands for not a number
console.log(array1 / 4);//NaN stands for not a number
array1[6] = 25;
console.log(array1);

//Array methods
array1.push(55);
console.log(array1);
array1.pop();
console.log(array1);
console.log(array1.indexOf('tata'));
console.log(array1);
array1.shift();
console.log(array1);
console.log(array1.includes(2021));
debugger;
array1.slice();
console.log(array1);

/*Objects*/
//In Array we need to access members by their index only, however in Object we have key-value
//pair structure, which makes accessing members easy.
const Array2D = [//Array
    'jyootimoy',
    'kakoty',
    2021-1995,
    'freelancer',
    ['sunny', 'aditya', 'manas']
];

const Object2D = {//Object
    fname: 'jyootimoy',
    lname: 'kakoty',
    age: 2021-1995,
    profession: 'freelancer',
    friends: ['sunny', 'aditya', 'manas']
};

console.log(Array2D);
console.log(Object2D);
console.log(Object2D.fname);
console.log(Object2D['lname']);


/*for loop*/
for(let i = 0; i < 4; i++){
    console.log(`i = ${i}: rose day`);
}
const input = prompt('enter a number');
let output = Number(input)
console.log(input, typeof(input), Number(input), output, typeof(output));