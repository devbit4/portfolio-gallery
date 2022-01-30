const body = document.querySelector("body");
const frame = document.querySelector("#list");
const loading = document.querySelector(".loading");
const input = document.querySelector("#search");
const btn = document.querySelector(".btnSearch");
const errMsg = document.querySelector(".errMsg");
const base = "https://www.flickr.com/services/rest/?";
const method1 = "flickr.interestingness.getList";
const method2 = "flickr.photos.search";
const key = "7867f2d006615cd9c7c79d1275688a01";
const per_page = 12;
const format = "json";

const url1 = `${base}method=${method1}&api_key=${key}&per_page=${per_page}&format=${format}&nojsoncallback=1`;

callData(url1);


function callData(url) {
    frame.innerHTML = "";
    loading.classList.remove("off");
    frame.classList.remove("on");

    fetch(url)
        .then(data => {
            return data.json();
        })
        .then(json => {
            let items = json.photos.photo;
            creatList(items);
            delayLoading();

        });
}

function creatList(items) {
    let htmls = "";
    items.forEach(data => {
        console.log(data);
        let imgSrc = `https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_m.jpg`;
        let imgSrcBig = `https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_b.jpg`;

        htmls += `
                  <li class="item">
                     <div>
                           <img class="thumb" src="${imgSrc}">
                        <div class="text">
                        <h2>${data.title.toUpperCase()}</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aperiam accusamus impedit sapiente, reiciendis fugit.</p>
                        <a href="${imgSrcBig}">SEE MORE <i class="fas fa-angle-right"></i></a>
                        </div>
                     </div>
                  </li>
         `;
    });

    frame.innerHTML = htmls;
}

function delayLoading() {
    const imgs = frame.querySelectorAll("img");
    const len = imgs.length;
    let count = 0;

    for (let el of imgs) {
        el.onload = () => {
            count++;
            if (count === len) isoLayout();
        }

        let thumb = el.closest(".item").querySelector(".thumb");
        thumb.onerror = e => {
            e.currentTarget.closest(".item").querySelector(".thumb").setAttribute("src", "img/collection/ins.jpg");
        }

    }
}

function isoLayout() {

    loading.classList.add("off");
    frame.classList.add("on");

    new Isotope("#list", {
        itemSelector: ".item",
        columnWidth: ".item",
        transitionDuration: "0.5s"
    })
}