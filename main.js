const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shoping-cart');
const productoCarrito = document.querySelector('.shoppingCart');

menuCarritoIcon.addEventListener('click', togglecarritoCompras);
navEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleBurguerMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    productoCarrito.classList.add('inactive');
}

function toggleBurguerMenu(){
    productoCarrito.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function togglecarritoCompras(){
    mobileMenu.classList.add('inactive');
    productoCarrito.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
}