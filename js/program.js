const toggle = document.querySelector('.toggle');
const toggleMenu = document.querySelector(".header-menu")

toggle.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu.classList.toggle("on");
});



// tab
const tabs = document.querySelectorAll(".tabs li");
const contexts = document.querySelectorAll(".context");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {

        tabs.forEach((tab) => {
            tab.classList.remove("active");
        })
        tab.classList.add("active");
        contexts.forEach((context) => {
            context.classList.remove("active");
        })
        contexts[index].classList.add("active");
    })

})


// youtube

const key = "AIzaSyDsfN60C3q050t7aRRi2gw5CcR9CkegDz8";
const playListId = "PL1fBkO2q3tOe6huu6XXUA1yl83crPQIkS";
const num = 6;
const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playListId}&maxResults=${num}`;

const list = document.querySelector(".videos");


fetch(url)
    .then(data => {
        return data.json()
    })
    .then(data => {

        let videos = data.items;
        let html = "";
        videos.forEach(video => {
            let title = video.snippet.title;
            if (title.length > 35) {
                title = title.substr(0, 35) + "...";
            }
            let des = video.snippet.description;
            if (des.length > 100) {
                des = des.substr(0, 100) + "...";
            }
            let date = video.snippet.publishedAt;
            date = date.split("T")[0];

            html += `
            <article>
                <div class="innertxt">
                    <div class="pic">
                        <a href="${video.snippet.resourceId.videoId}" class="link">
                            <img src="${video.snippet.thumbnails.medium.url}">
                            <i class="far fa-play-circle"></i>
                            </a>

                    </div>
                    <div class="text">
                        <h2>${title}</h2>
                        <p>${des}</p>
                        <span>${date}</span>
                    </div>
                </div>
            </article>
    `
        })
        let articles = document.createElement("div");
        articles.classList.add("vids");
        articles.innerHTML = html;
        list.append(articles);

    })



// 유튜브 불러오기
list.addEventListener("click", e => {
    e.preventDefault();

    if (e.target.nodeName !== "IMG" && e.target.nodeName !== "I") return;


    const id = e.target.closest("a").getAttribute("href");
    let pop = document.createElement("figure");
    pop.classList.add("pop");
    pop.innerHTML = `
              <iframe src="https://www.youtube.com/embed/${id}" frameborder="0" width="100%" height="100%" allowfullscreen></iframe>
              <span class="btnClose">CLOSE</span>
        `;

    list.append(pop);
});

// close 버튼
list.addEventListener("click", e => {
    const pop = list.querySelector("figure");

    if (pop != null) {
        const close = pop.querySelector("span");

        if (e.target == close) {
            e.target.closest("figure").remove();
        }
    }
});

// 유튜브 스크롤 모션
const videos = document.querySelector(".videos");
const base = -300;

window.addEventListener("scroll", e => {
    scrollMotion(videos, videos, base);
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