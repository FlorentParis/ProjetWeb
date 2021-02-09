const notice = document.getElementById("notice");
const info = document.getElementById("info");
const closeNotice = document.getElementById("closenNotice");

info.addEventListener("click", () => {
    notice.classList.add("active");
});