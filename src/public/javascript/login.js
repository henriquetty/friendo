const email = document.querySelector("#email");
const password = document.querySelector("#password");
const lbutton = document.querySelector(
    "#loginWaves > main > div.container > div > div > form > button"
);

setInterval(() => {
    if (!email.value || !password.value) {
        lbutton.classList.add("disabled");
    } else {
        lbutton.classList.remove("disabled");
    }
}, 500);
