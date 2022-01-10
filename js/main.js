// menu toggle
const toggle = document.querySelector('.toggle');
const toggleMenu = document.querySelector(".header-menu")

toggle.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu.classList.toggle("on");
});

