//DOM is not a part of JS. It's part of WEB APIs which browsers implement following a official DOM specification.
//JS is just a dialect, an ECMA script specification which helps in DOM manipulation as per our requirement.
//Apart from DOM, there are other WEB APIS as well such as "Timers", "Fetch", etc.

console.log(document.querySelector('div.article'));
console.log(document.querySelector('body'));
console.log(document.querySelector('h1').textContent);
console.log(document.querySelector('h1').addEventListener('dragleave', function(){
    console.log(document.querySelector('h1').textContent = 'Text Changed');
}));

/*Modal Window*/
//In user interface design for computer applications, a modal window is a graphical control element subordinate
//to an application's main window. A modal window creates a mode that disables the main window but keeps it visible,
//with the modal window as a child window in front of it.
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');
//Limitation of querySelector() is that whether there are multiple items of the same class/id, it always selects the first one.
//To select all use querySelectorAll()
console.log(btnShowModal);
console.log(modal.classList);
let length = btnShowModal.length;
console.log(length);

const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

//Show Modal
for(let i = 0; i < length; i++){
    btnShowModal[i].addEventListener('click', openModal);
}
console.log(modal.classList);
//Hide Modal
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

/*Keyboard Key Press Handle*/
document.addEventListener('keydown', function(event){
    console.log(event);
    if(event.key === 'Escape'){
        if(!modal.classList.contains('hidden')){
            closeModal();
        }
    }
});

/*Classlist.toggle method */
//If a class is present toggle removes it and if not present then adds the same.
const togBtn = document.querySelector('.togBtn');
const togDiv = document.querySelector('.tog')
togBtn.addEventListener('click', function(){
    togDiv.classList.toggle('hidden');
});

/*JS Thread & Event Loop*/
//Passing a function into another function as an argument is called 1st class function.
//JS is Single-threaded, so could perform a single task at a time.
//Hence, event loops (Non-blocking) are required to handle long running tasks.
//Event loops possess non-blocking behaviour takes long running tasks, execute them in background,
//and put them back once they are finished.

/*JS Engine*/
//JS Engine is a program that runs JS code.
//Google's "V8 Engine" is one of the popular JS Engine which powers Chrome and NodeJS.
//Any JS Engine has two things: Call Stack and Heap
//The call stack is where our code is actually executed using something called execution contexts.
//The heap is an unstructured memory pool which stores all the objects that our application needs.
//JS is purely interpreted language however, modern JS engines uses a mix between
//compilation and interpretation which is called "just-in-time compilation".
//This approach basically compiles the entire code into machine code at once and then executes it right away
//Machine code is not put into any binary file like usual compilation does.
//Modern JavaScript engines actually have some pretty clever optimization strategies.
//What they do is creates a very unoptimized version of machine code in the beginning just so that
//it can start executing as fast as possible. Then in the background, this code is being optimized
//and recompiled during the already running program execution. And this can be done most of the times
//After each optimization the unoptimized code is simply swept for the new more optimized code
//without ever stopping execution of course. This process is what makes modern engines
//such as the V-Eight so fast and all this parsing, compilation and optimization happens in 
//some special threads inside the engine that we cannot access from our code.
//So completely separate from the main thread that is basically running in call stack executing our own code.

/*JS Runtime*/
//In JS runtime web APIs are essential functionalities provided to the engine, but which are actually
//not part of the JavaScript language itself. JavaScript simply gets access to these APIs through
//the global window object. But it still makes sense that the web APIs are also part of the runtime,
//because again a runtime is just like a box that contains all the JavaScript related stuff that we need.
//Next a typical JavaScript runtime also includes a so called callback queue.
//Callback queue is a data structure that contains all the callback functions that are ready to be executed.
//For example we attach event handler functions to DOM elements like a button to react to certain events, right?
//And these event handler functions are also called callback functions. So as the event happens,
//for example: a click, the callback function will be called. And that's how it actually works behind the scene.
//So the first thing that actually happens after the event is that the callback function is put into
//the callback queue. Then when the stack is empty the callback function is passed to the stack
//so that it can be executed. And this happens by something called the event loop.So basically
//the event loop takes callback functions from the callback queue & puts them in the call stack to execute.


/*Scope*/
//Scoping defines how our program variables are organized and accessed.
//It's the space or environment in which certain variable is declared.
//In JavaScript, we have the global scope, function scope, and block scope.
//Scope chain is the order in which functions are written in the code. It has nothing to do
//with order in which function are called.

/*Hoisting*/
//In JavaScript we have a mechanism called hoisting. It makes some types of variables accessible/usable
//in the code before they are actually declared.
//Variables are not magically lifted/moved to the top of their scope.
//Instead, behind the scenes the code is basically scanned for variable declarations before it is executed.
//So this happens during the so-called creation phase of the execution context.
//Then for each variable that is found in the code, a new property is created in a variable environment object.
//And that's how hoisting really works. 

//                                *Hoisted*        *initial value*            *scope*
//function declarations              yes            actual function             block (in only strict mode), function otherwise
//var variables                      yes            undefined                   function
//let and const variables             no            <uninitialized>, TDZ       block
//function expressions & arrows    ---depends whether we are using var or let/const ---

//Now, hoisting does not work the same for all variable types.
//And so let's analyze the way hosting works.
//So function declarations are actually hoisted & the initial value in the variable environment
//is set to the actual function. So in practice, what this means is that we can use function declarations
//before they are actually declared in the code, again, because they are stored in the variable 
//environment object, even before the code starts executing.
//This is why because of hoisting function declarations work before they are actually declared.
//Just keep in mind that this is only true for strict mode.
//So if you're using a sloppy mode, which you shouldn't, then functions are functioned sculpt.
//Next, variables declared with var are also hoisted, but hoisting works in a different way here.
//So unlike functions, when we try to access a var variable before it's declared in a code,
//we don't get the declared value but we get undefined. And this is a really weird behavior for beginners.
//You might expect that you simply get an error when using a variable before declaring it or to
//get the actual value. 
//And actually this behavior is a common source of bugs in JavaScript.
//So this is one of the main reasons why in modern JavaScript we almost never use var.
//Now on the other hand, let and const variables are not hoisted.
//I mean, technically they are actually hoisted but their value is basically set to an initialized.
//So there is no value to work with at all. In practice, it is as if hoisting was not happening at all.
//Instead, we say that these variables are placed in a so-called Temporal Dead Zone or TDZ
//which makes it so that we can't access the variables before the beginning of the scope.
//TDZ makes it easier to avoid and catch errors.
//So as a consequence, if we attempt to use a let or const variable before it's declared, we get an error.
//Also keep in mind that let and const are block scoped.
//So they exist only in the block in which they were created.
//And all these factors together is basically the reason why we use let and const instead of var in modern JS.

/*This keyword*/
//This means object that is calling the method.
//In strict mode this = undefined for simple function call however, = window (otherwise in the browser).
//And finally, if a function is called as an event listener, then the this keyword will always point
//to the DOM element that the handler function is attached to.
//This keyword in the global scope is simply the window object.
//Importantly, this will never point to the function in which we are using it.
//Also, the this keyword will never point to the variable environment of the function.
//Remember, arrow functions do not get their own 'this keyword'.
//Instead, if you use 'the this variable' in an arrow function, it will simply be the this keyword
//of the surrounding function. So of the parent function and in technical terms, this is called the 
//'lexical this keyword,' because it simply gets picked up from the outer lexical scope of the arrow function.

/*Destructuring Arrays*/
const arr = [2, 3, 4, 5];
const [x, y, z, u] = arr;
console.log(x, y, z, u);
console.log(arr);

/*Destructuring Objects*/ //Destructuring helps in dealing with 3rd party data
const resturant = {
    resturantName: 'Tholua, the ethnic hub',
    openingHours: {
        open: 9,
        close: 8
    },
    resturantLocations: ['Sivasagar', 'Gaurisagar', 'Amguri', 'Jhanji', 'Rudrasagar']
};
const {resturantName: name, openingHours: hours, resturantLocations: locations} = resturant;
console.log(name, hours, locations);
//Default value and adding extra property
const {menu = [], resturantName: name1 = 'Kareng Resort', openingHours: hours1 = {open: 9, close: 7}} = resturant;
console.log(menu, name1, hours1);
console.log(resturant);

/*Spread Operator*/
const newArr = [12, 7, 3, arr];
const newArr1 = [12, 7, 3, ...arr];
console.log(newArr);
console.log(newArr1);
const str = 'Jyootimoy';
console.log(...str);
console.log(...str, ',', 'k', 'a', 'k', 'o', 't', 'y');
const str1 = [...str, ...'kakoty'];
console.log(str1);