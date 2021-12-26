const vidList = document.querySelector(".vidList");
// const key = "AIzaSyCaMHpUSfzx7r4sjOMvOrs9nhRpKOXtcKo";
// const playListId = "PLYOPkdUKSFgX5CgKf68RJzJHec0XEdBNd";
const num = 10;
const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playListId}&maxResults=${num}`;

fetch(url)
    .then(data => {
        return data.json();
    })
    .then(json => {
        console.log(json);

        let items = json.items;
        let result = '';

        items.forEach(item => {
            //string.substr(start, length) : 문자열 자르기
            let title = item.snippet.title;
            if (title.length > 35) {
                title = title.substr(0, 35) + "...";
            }
            //description 내용 자르기
            let con = item.snippet.description;
            if (con.length > 100) {
                con = con.substr(0, 100) + "...";
            }

            //publishedAt 날짜 변환
            let date = item.snippet.publishedAt;

            date = date.split("T")[0];


            result += `
               <article>
                  <a href="${item.snippet.resourceId.videoId}" class="pic">
                     <img src="${item.snippet.thumbnails.medium.url}">
                  </a>
                  <div class="con">
                     <h2>${title}</h2>
                     <p>${con}</p>
                     <span>${date}</span>
                  </div>
               </article>
      `;

        });
        vidList.innerHTML = result;

    });

//팝업 생성 이벤트
vidList.addEventListener("click", e => {
    e.preventDefault();

    //클릭한 이미지의 부모요소가 a태그가 아니라면 중지
    // if(e.target.parentNode.nodeName != "A") return;
    // if(!e.target.closest("a")) return;
    if (e.target.closest("a") == null) return;

    const vidId = e.target.closest("a").getAttribute("href");
    let pop = document.createElement("figure");
    pop.classList.add("pop");
    pop.innerHTML = `
         <iframe src="https://www.youtube.com/embed/${vidId}" frameborder="0" width="100%" height="100%" allowfullscreen></iframe>
         <span class="btnClose">close</span>
   `;

    vidList.append(pop);
});

//팝업 닫기 버튼 클릭시
vidList.addEventListener("click", e => {
    const pop = vidList.querySelector("figure");
    if (pop != null) {
        const close = pop.querySelector("span");

        if (e.target == close) {
            e.target.closest("figure").remove();
        }
    }
});
