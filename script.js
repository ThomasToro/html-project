/*STICKY NAVAR*/
window.onscroll = ()=> {
    

let header = document.querySelector('.header');

header.classList.toggle("sticky", window.scrollY > 1);
};

// Toggle menu icon
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*SWIPER TESTIMONIAL*/

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 80,
    loop: true,
    grabCursor: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});
