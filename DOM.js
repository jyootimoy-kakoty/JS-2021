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