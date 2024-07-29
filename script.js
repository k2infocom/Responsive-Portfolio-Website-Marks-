let button = document.querySelector('.bars');
let menu = document.querySelector('ul');

button.addEventListener('click' , () =>{
    menu.classList.toggle('active');
});

$('body').ripples({
	resolution:512,
	dropRadius: 30,
	perturbance: 250,
});
