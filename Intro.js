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

So there are seven primitive data types,

number, string, bullion, undefined, null,

symbol and big int.