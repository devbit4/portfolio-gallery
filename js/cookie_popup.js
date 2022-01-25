const popup = document.querySelector("#popup");
const btnClose = popup.querySelector(".closeBtn");

let isCookie = document.cookie.indexOf("popup=false");
let id_name = popup.getAttribute("id");

if (isCookie === -1) {
    popup.style.display = "block";
} else {
    popup.style.display = "none";
}

btnClose.addEventListener("click", (e) => {
    e.preventDefault();
    let isChecked = popup.querySelector("input[type=checkbox]").checked;
    let id_name = popup.getAttribute("id");

    if (isChecked) {
        setCookie(id_name, "false", 1);
        popup.style.display = "none";
    } else {
        popup.style.display = "none";
    }
});


function setCookie(Name, Value, time) {
    let today = new Date();

    let date = today.getDate();
    today.setDate(date + time);

    const dueDate = today.toGMTString();

    document.cookie = `${Name}=${Value}; path=/; expires=${dueDate}`;
}