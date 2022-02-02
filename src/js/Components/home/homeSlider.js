import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    speed : 400,
    spaceBetween: 100,
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        type: "progressbar"
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    }
})