const button = document.querySelector("body > header > nav > div > button");
const sideBar = document.querySelector("#sidebar");

let showBar = true;

button.addEventListener("click", (e) => {
    if (showBar) {
        sideBar.style.display = "none";
        showBar = false;
    } else {
        sideBar.style.display = "block";
        showBar = true;
    }
});
