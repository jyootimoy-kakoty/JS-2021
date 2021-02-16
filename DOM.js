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
        monToFri: {
            open: 9,
            close: 8
        },
        satToSun: {
            open: 10,
            close: 6
        }
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

/*Rest Pattern*/
const [A, B, ...C] = [...arr, ...str];//Rest Pattern should always be at the end, here 'C'
console.log(A, B, C);

/*Short-Circuting*/
//In the case of the OR operator, short circuiting means that if the first value is a true value,
//it will immediately return that first value and the other operand will not even be evaluated.
console.log(3 || 'Jyootimoy');
console.log('' || 5);
console.log(' ' || 5);
console.log(null || undefined);
console.log(undefined || null);
//AND will return the last true value iff all true, else return the false value
console.log(0 && 'hi');
console.log(10 && 5);
console.log('hello'&& 5 && null && 'boy');
const guest = resturant.guests ? resturant.guests : 5;
console.log(guest);
resturant.guests = 10;
const guest1 = resturant.guests ? resturant.guests : 5;
console.log(guest1);

/*Nullish Coalescing*/
const guest2 = resturant.guest ?? 55;
console.log(guest2);
const guest3 = resturant.guest1 ?? 75;
console.log(guest3);

/*For loop Alternative way*/
for(const i of arr) console.log(i);

/*Optional Chaining*/
//Helps to stop accessing undefined members
console.log(resturant.hours);
console.log(resturant.hours?.open);


/*Object Keys, Values and Entries*/
console.log(Object.keys(hours));
console.log(Object.values(hours));
console.log(Object.entries(hours));
for(const [key, {open, close}] of Object.entries(hours))
    console.log(`On ${key} we open at ${open} and close at ${close}`);

/*Sets*/
//And a set is basically just a collection of unique values. So that means that
//a set can never have any duplicates. And that property makes them useful
//in certain situations.
const set1 = new Set(['Indigo', 'Go Air', 'Spice Jet', 'Indigo', 'Spice Jet', 'Air India', 'Vistara', 'Indigo', 'Air Asia']);
console.log(set1);
console.log('size of set1: ' + set1.size);
console.log(set1.has('Air India'));
set1.add('Jet Airways', 'Kingfisher');//Only first one added
console.log(set1);
console.log(set1.delete('Kingfisher'));//prints false as couldn't delete absent item
//set1.clear();
console.log(set1);
console.log(new Set('JavaScript'));
const set2 = new Set('Indigo', 'Go Air', 'Spice Jet', 'Indigo');//Takes only first string
console.log(set2);
console.log('size of set2: ' + set2.size);

/*Maps*/
//In JavaScript, a map is a data structure that we can use to map values to keys. So, just like 
//an object, data is stored in key-value pairs in maps. Now, the difference between objects & maps
//is that in maps, the keys can have any type and this can be huge. So, in objects, the keys are
//basically always strings. But in maps, we can have any type of key. It could even be objects, 
//or arrays, or other maps. So, that can lead to some really great and advanced stuff.
//And so, we again use the constructor to create a map, the easiest way to create a map
//is to actually create an empty map without passing anything in. And then, to fill up the map
//we can use the set method.
const map1 = new Map();
map1.set('key1', 'India');
//Calling the set method like this does not only update the map that it's called on, but it
//also returns the map.
console.log(map1.set('key2', 'Asia, Africa'));
console.log(map1.set(10, 'Australia'));
console.log(map1.get('key1'));
console.log(map1.delete('key1'));
const arrKey = [1, 2, 3];
//const arrValue = [2, 3, 5, 7, 11];
console.log(map1.set(arrKey, [2, 3, 5, 7, 11]));
console.log(map1.has(10));
console.log(map1.get(arrKey));

//Alternate way to create map
const map2 = new Map ([
    ['key1', 'Assam'],
    ['key2', 'Sivasagar']
]);
console.log(map2);

/*String*/
const strr = 'Election 2021';
console.log(strr.slice(9));
console.log(strr.slice(2,10));
console.log(strr.slice(0, strr.indexOf(' ')));
let index = strr.indexOf(' ');
console.log(strr.slice(0, index).toLocaleLowerCase());
console.log('hello friend how are you?'.split(' '));
console.log('   jyootimoy.kakoty@gmail.com 2021 '.trim());
const price = '100$';
console.log(price.replace('$', '₹'));
const announcement = 'door to door campain and doorstep service!';
console.log(announcement.replace(/door/g, 'gate'));//'/xyz/g' means regular expression, g is global
console.log(price.padStart(10, '*'));

/*Default value for Function parameters*/
const checkDefault = function(x = 1, y = 11) {
    console.log(x, y);
}
checkDefault();
checkDefault(2, 6);
checkDefault(5);

/*JS Function Parameter Types*/
//There is no pass by reference option available here. Only the one we can use is pass by value.

/*Higher Order Function*/
//So a higher order function is either a function that receives another function as an argument,
//or a function that returns a new function, or does both.
const Button = btnShowModal;
Button[0].addEventListener('click', closeModal);
//addEventListener() is a higher order function and closeModal is a first class function.

function count() { //count() is a higher order function
    let counter = 0;
    console.log('counted');
    counter++;
    return function() {
        counter;
    }
}

/*forEach*/
const right = function() {
    console.log('✔');
};
['a', 'b', 'c' ,'d', 'e'].forEach(right);

/*Call and Bind*/
//Learn later

/*Immediately Invoked Function Expressions*/
//Sometimes in JavaScript, we need a function that is only executed once. Then never again.
//So basically a function that disappears right after it's called once.
//But we actually need this technique later. For eg: with something called async/await.
//So how could we do that?
//Well, we could simply create a function and then only execute it once.
//This will never run again.
//However, we can actually run this function again. At some other point in the code, if we
//want it too, right? There's nothing stopping us, from later doing run once again. 
const runOnce = function() {
    console.log('This will never run again');
};

runOnce();
//So we want to actually execute a function immediately and not even having to save it somewhere.
//And so this is how we do that.
//We simply write the function expression itself without assigning it to any variable.
//Now, if we try to run this, we will get an error for now. So it says function statements require
//a function name. And that's because of course JavaScript here expects a function statement.
//Because we simply started this line of code here with the function keyword.
/*
function() {
    console.log('This will never run again');
}
*/
//However, we can still trick JavaScript into thinking that this is just an expression. And we do
//that by simply wrapping all of this into parentheses. And so now, we basically transformed the
//statement that we had before into an expression. And so now if we save this, we get no error.
//But also this function didn't execute yet, right? We never called it.
(function() {
    console.log('This will never run again');
});
//So we know that this here is the function. And so, we can then immediately call it.
//It's just a function expression. And then immediately,we call it here. And so this is why this
//pattern here, is called the Immediately Invoked Function Expression. Or IIFE for short.
(function() {
    console.log('This will never run again');
})();//called function

/*Closure*/
//Now, the first thing that we need to know that closure is not a feature that we explicitly use.
//So we don't create closures manually, like we create a new array or a new function.
//So a closure simply happens automatically in certain situations, we just need to recognize
//those situations. Let's understand with an example.
const secureBooking = function() {
    let passengerCount = 0;
    return function() {
        passengerCount++;
        console.log(`passenger count: ${passengerCount}`);
    }
};

const booker = secureBooking(); //It will return function.
//So, now, booker = function(){passengerCount++;console.log(`passenger count: ${passengerCount}`);}

//So let's call it here 4 times. And indeed we get one, two, three, four passengers.
//And so what this means is that the Booker function is in fact able to increment the
//passengerCount to one, then to two, then to three, and then to four.
//But now if we think about this, then how is this even possible?
booker(); //passenger count: 1
booker(); //passenger count: 2
booker(); //passenger count: 3
booker(); //passenger count: 4

//How can the Booker function update this passengerCount variable that's defined in a
//secure booking function that actually has already finished its execution. And so, it is gone.
//So its execution context is no longer on the stack, but still this inner function here,
//which is the Booker function, is still able to access the passengerCount variable that's
//inside of the Booker function that should no longer exist. And maybe you can guess that what
//makes this possible is a closure.
//This Booker function here is simply a function that exists out here in the global environment
//or in the global scope, right? And the environment in which the function was created.
//However, basically, this environment is no longer active. But still the Booker function somehow
//continues to have access to variables that're present at the time that the function was created.
//In particular, this passengerCount variable here. And so that's exactly what the closure does.
//We can say that a closure makes a function remember all the variables that existed at the
//function's birthplace essentially. So we can imagine the secure booking as being the birthplace
//of this function. So of the Booker function, essentially. 
//And this cannot simply be explained with the scope chain alone. So we need to also understand 
//the closure. And so let me now really explain how it actually works. 
//The most important thing to notice here is that the execution context of secure booking
//is no longer on call stack, because again, this function has finished execution long ago.
//So now it's time to finally run the Booker function and see exactly what's gonna happen here.
//Note that Booker is really this function here, located in the global scope.
//Anyway, the first thing that's gonna happen is that a new execution context is created and put
//on top of the call stack and the variable environment of this context is emptied simply
//because there are no variables declared in this function.
//Now what about the scope chain?
//Well, since Booker is in the global context, it's simply a child's scope of the global scope,
//just like this, but maybe now you're starting to see the problem.
//So how will the Booker function access the passengerCount variable?
//It's nowhere to be found in the scope chain, right?
//So this is where we start to unveil the secret of the closure: Any function always has access
//to the variable environment of the execution context in which the function was created.
//Now, in the case of Booker, this function was created. So in a sense, the scope chain is
//actually preserved through the closure, even when a scope has already been destroyed because
//its execution context is gone. This means that even though the execution context has actually
//been destroyed, the variable environment somehow keeps living somewhere in the engine.
//Now we can say that the Booker function closed over its parents scope or over its parent
//variable environment. And this includes all function arguments. Even though in this example,
//we don't have any. And now this attached or closed over variable environment stays with the
//function forever. It will carry it around and be able to use it forever. To make it a bit more
//digestible, we can also say that thanks to the closure, a function does not lose connection
//to variables that existed at the function's birthplace. That's a bit more intuitive, right?
//But anyway, with execution of the Booker function. So the function attempts to increase the
//passengerCount variable. However, this variable is not in the current scope. And so JavaScript
//will immediately look into the closure and see if it can find the variable there.
//And it does this even before looking at the scope chain. For eg: if there was a global
//passengerCount variable set to 10, it would still first use the one in the closure.The closure
//basically has priority over the scope chain. So after running this function, the passengerCount
//becomes one. And then the execution context is popped out of the stack. Then execution moves to
//the next line. We get a new execution context and a closure is still there, still attached to
//the function and the value is still one. And so now this function executes, increasing the
//passengerCount to two and so on.
//Okay, and that's what closures are and how they work behind the scenes. And I know that this is
//all quite complex. So let me give you a couple different definitions.
//1. A closure is the closed over variable environment of the execution context in which a
//function was created even after that execution context is gone, or in other words, even after
//the function to which the execution context belongs has returned.
//2. A closure gives a function access to all the variables of its parent function. So the
//function in which it is defined even after that parent function has returned. The function
//keeps a reference to its outer scope even after that outer scope is gone, which basically
//preserves the scope chain throughout time.
//3. A closure makes sure that a function does never lose connection to the variables that
//existed at the function's birthplace. It remembers the variables, even after the birthplace
//is gone. It's like a person who doesn't lose connection to their hometown. In this analogy,
//the person is the function and the hometown is the function's parents scope, and the function
//then doesn't lose the connection to the variables stored in this parent's scope.
//Finally, we need to understand that we do not have to create closures manually. Instead, this is
//something that JavaScript does completely automatically, we don't have to do anything. Also,
//there is no way for us to explicitly access closed over variables. That's because closures are
//not like a tangible thing. They're not like an object or so that we can access. We cannot just
//reach into a closure and take variables from it. That's impossible because a closure is just
//an internal property of a function. We can observe that a closure happens because functions
//magically keep having access to variables that should no longer exist, but we cannot directly
//access these variables.
//However, what we can do is actually take a look at this internal property.
//So in the console: use console.dir and then of the Booker function itself.
//Similar to console.log but this one is a bit different.
console.dir(booker);
//And so here we now get this function itself. Now, we can get the arguments, the name property
//that we already took a look at before. Then down here, we have this scope's internal property.
//And this internal scope's property here is basically the variable environment of the Booker function.
//Now in here, we can actually see the closure coming from secure booking. So this is where we
//see the passengerCount, which currently stands at 4. And so this closure here basically, is the
//variable environment of this secure booking. So that's the one that is being preserved by the
//closure.
//And by the way, whenever you see these double brackets "[[]]"" here, that means that it is an
//internal property, which we cannot access from our code.

//My conclusion: closure is simply static variable concept

//Closure examples
let f;
const g = function(){
    let a = 5;
    f = function() {
        console.log(a *= 3);
    };
};

g();
f();
f();

const h = function(){
    let b = 5;
    f = function() {
        console.log(b *= 10);
    };
};
h();
f();
f();

setTimeout(function(){console.log('Please hurry up!!');}, wait = 2000); //will  display after 2 sec


(function(){
    const header = document.querySelector('h1');
    header.style.color = 'blue';

    document.querySelector('body').addEventListener('click', function(){
        header.style.color = 'red';
    });
})();
