const navEmail = document.querySelector('.navbar-email');

const desktopMenu = document.querySelector('.desktop-menu');

const burguerMenu = document.querySelector('.menu');

const mobileMenu = document.querySelector('.mobile-menu');

navEmail.addEventListener('click', toggleDesktopMenu);

burguerMenu.addEventListener('click', toogleBurguerMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

function toogleBurguerMenu(){
    mobileMenu.classList.toggle('inactive');
}