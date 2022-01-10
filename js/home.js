// programs
const programs = document.querySelector("#programs");
const displays = document.querySelector(".displays");

const base = -200;

window.addEventListener("scroll", e => {
    scrollMotion(programs, displays, base);
});

function scrollMotion(section, target, base) {
    let scroll = window.scrollY || window.pageYOffset;
    const top = section.offsetTop + base;
    const bottom = section.offsetTop + section.offsetHeight;

    if (scroll >= top && scroll <= bottom) {
        target.classList.add("on");
    } else {
        target.classList.remove("on");
    }

}

// testimonials

let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});