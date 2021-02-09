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


