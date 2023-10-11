let burger = document.querySelector('.burger');
let menu = document.querySelector('.nav');

burger.addEventListener('click',

    function () {

        burger.classList.toggle('burger--active');

        menu.classList.toggle('nav--active');

        document.body.classList.toggle('stop-scroll');
    });

const navBtns = document.querySelectorAll('.nav__link');
const drops = document.querySelectorAll('.dropdown');

navBtns.forEach(el => {
    el.addEventListener('click', (e) => {
        let currentBtn = e.currentTarget;
        let dropdown = currentBtn.closest('.nav__item').querySelector('.dropdown');

        navBtns.forEach(el => {
            if (el !== currentBtn) {
                el.classList.remove('nav__link--active');
            }
        });

        drops.forEach(el => {
            if (el !== dropdown) {
                el.classList.remove('dropdown--active');
            }
        });

        dropdown.classList.toggle('dropdown--active');
        currentBtn.classList.toggle('nav__link--active');
    });
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav__list')) {
        navBtns.forEach(el => {
            el.classList.remove('nav__link--active');
        });

        drops.forEach(el => {
            el.classList.remove('dropdown--active');
        });
    }
});

//document.addEventListener('DOMContentLoaded', function () {
//const select = document.querySelector('.custom-select');
//select.addEventListener('click', (e) => {
//e.currentTarget.classList.toggle('custom-select--open');

//if (e.target.closest('.custom-select__item')) {
//let text = e.target.closest('.custom-select__item').innerHTML;
//e.currentTarget.querySelector('.custom-select__top').innerHTML = text;
//}
//});

//document.addEventListener('click', (e) => {
//if (!e.target.closest('.header-right__select')) {
//select.classList.remove('custom-select--open');
//}
//});
//});


var lazyLoadInstance = new LazyLoad({
});
lazyLoadInstance.update();
const title = document.querySelector('.menu__title');
const list = document.querySelector('.menu__list');
const btns = document.querySelectorAll('.menu__btn');

if (document.querySelector('.menu')) {
    title.addEventListener('click', () => {

        list.classList.toggle('menu__list--active');

        title.classList.toggle('menu__title--active');
    });

    btns.forEach(function (el) {
        el.addEventListener('click', function () {

            list.classList.remove('menu__list--active');

            title.classList.remove('menu__title--active');
        });
    });
}




const ideasSlider = new Swiper('.ideas__swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    direction: 'horizontal',

    navigation: {
        nextEl: '.slider-nav__next',
        prevEl: '.slider-nav__prev',
    },

    breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 20
        },

        1024: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    }
});



