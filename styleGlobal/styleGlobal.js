const notice = document.getElementById("notice");
const info = document.getElementById("info");
const closeNotice = document.getElementById("closeNotice");

info.addEventListener("click", () => {
    notice.classList.add("active");
});

closeNotice.addEventListener("click", () => {
    notice.classList.remove("active");
});