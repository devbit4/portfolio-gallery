// menu toggle
const toggle = document.querySelector('.toggle');
const toggleMenu = document.querySelector(".header-menu")

toggle.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu.classList.toggle("on");
});

// arrow-up
const arrow = document.querySelector(".arrow-up");
const home = document.querySelector("#home");
window.addEventListener("scroll", () => {

    if (window.scrollY > home.offsetHeight / 2) {
        arrow.classList.add("visible");
    } else {
        arrow.classList.remove("visible");

    }

})

arrow.addEventListener('click', (e) => {
    home.scrollIntoView();
});
