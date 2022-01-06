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

tabs[0].click();

// youtube

const key = "AIzaSyDsfN60C3q050t7aRRi2gw5CcR9CkegDz8";
const playListId = "PLYOPkdUKSFgX5CgKf68RJzJHec0XEdBNd";
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
                        </a>
                        <i class="far fa-play-circle"></i>
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