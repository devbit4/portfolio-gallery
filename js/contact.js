var container = document.getElementById('map');
const t_on = document.querySelectorAll(".traffic li")[0];
const t_off = document.querySelectorAll(".traffic li")[1];
const branch_btns = document.querySelectorAll(".branch li");

var options = {
    center: new kakao.maps.LatLng(37.509502, 126.7563291),
    level: 3
};

var map = new kakao.maps.Map(container, options);

var markerOptions = [
    {
        title: 'branch1',
        latlng: new kakao.maps.LatLng(37.509502, 126.7563291),
        imgSrc: 'img/contact/marker1.png',
        imgSize: new kakao.maps.Size(50, 70),
        imgPos: { offset: new kakao.maps.Point(25, 70) },
        button: branch_btns[0]
    },
    {
        title: 'branch2',
        latlng: new kakao.maps.LatLng(33.450936, 126.569477),
        imgSrc: 'img/contact/marker1.png',
        imgSize: new kakao.maps.Size(50, 70),
        imgPos: { offset: new kakao.maps.Point(25, 70) },
        button: branch_btns[1]
    }
];

for (let i = 0; i < markerOptions.length; i++) {
    new kakao.maps.Marker({
        map: map,
        position: markerOptions[i].latlng,
        title: markerOptions[i].title,
        image: new kakao.maps.MarkerImage(markerOptions[i].imgSrc, markerOptions[i].imgSize, markerOptions[i].imgPos)
    });


    markerOptions[i].button.onclick = e => {
        e.preventDefault();

        for (let k = 0; k < markerOptions.length; k++) {
            markerOptions[k].button.classList.remove("on");
        }
        markerOptions[i].button.classList.add("on");

        moveTo(markerOptions[i].latlng);
    }
}


window.onresize = () => {
    let active_btn = document.querySelector(".branch li.on");
    let active_index = active_btn.getAttribute("data-index");
    map.setCenter(markerOptions[active_index].latlng);
}

//controller
var mapTypeControl = new kakao.maps.MapTypeControl();
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

//map moving
function moveTo(target) {
    var moveLatLon = target;
    map.setCenter(moveLatLon);
}

//traffic info
t_on.addEventListener("click", e => {
    e.preventDefault();
    if (t_on.classList.contains("on")) return;
    map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
    t_on.classList.add("on");
    t_off.classList.remove("on");
});

t_off.addEventListener("click", e => {
    e.preventDefault();
    map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
    t_on.classList.remove("on");
    t_off.classList.add("on");
});

