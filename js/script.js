let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menu.onclick = () => {
	navbar.classList.toggle('active');
	menu.classList.toggle('fa-times');
}

//when scolling down, it should remove the header
window.onscroll = () => {
	navbar.classList.remove('active');
	menu.classList.remove('fa-times');
}