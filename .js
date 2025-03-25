document.addEventListener("DOMContentLoaded", () => {
    const changeStyleBtn = document.getElementById("changeStyleBtn");
    const table = document.querySelector("table");

    changeStyleBtn.addEventListener("click", () => {
        table.style.border = "3px solid #ff5722";
        table.style.backgroundColor = "#ffe0b2"; // Light orange
        table.style.color = "#bf360c"; // Darker orange text
    });
});