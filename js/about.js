// about,team

const about = document.querySelector(".aboutUs");
const roles = document.querySelector(".roles");
const teamInner = document.querySelector(".inner");
const team = document.querySelector(".team");
const base = -300;

window.addEventListener("scroll", e => {
    scrollMotion(about, roles, base);
    scrollMotion(teamInner, team, base);
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


