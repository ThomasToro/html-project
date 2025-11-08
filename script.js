/*STICKY NAVAR*/
window.onscroll = ()=> {
    

let header = document.querySelector('.header');

header.classList.toggle("sticky", window.scrollY > 100);
};

/*SWIPER TESTIMONIAL*/

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 50,
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
