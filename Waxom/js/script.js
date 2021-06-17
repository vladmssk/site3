window.addEventListener('DOMContentLoaded', function () {


    document.querySelectorAll('.header a[href^="#"').forEach(link => {

        link.addEventListener('click', function (e) {
            e.preventDefault();

            let href = this.getAttribute('href').substring(1);
            const scrollTarget = document.getElementById(href);
            const topOffset = document.querySelector('.nav').offsetHeight;
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            console.log(elementPosition);
            const offsetPosition = elementPosition - topOffset + 70;
            console.log(offsetPosition);

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });


    const swiper = new Swiper('.slider-1', {

        simulateTouch: false,
        loop: true,
        speed: 500,
        initialSlide: 1,


        pagination: {
            el: '.swiper-pagination',
            clickable: true,

        },

        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });

    const swiperTwo = new Swiper('.slider-2', {

        simulateTouch: false,
        loop: true,
        speed: 400,

        spaceBetween: 0,
        slidesPerView: 1,

        slideActiveClass: 'swiper-slide-2-active',
        slideClass: 'slide-2',
        wrapperClass: 'wrapper-2',


        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
        },

        centeredSlides: true,

        navigation: {
            nextEl: '.next-2',
            prevEl: '.prev-2',
        },

        breakpoints:{

            768:{
                spaceBetween: 0,
                slidesPerView: 1,
            },
            
            1024:{
                spaceBetween: 100,
                slidesPerView: 3,
            },
        }

    });

});