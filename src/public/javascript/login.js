const email = document.querySelector("#email");
const password = document.querySelector("#password");
const lbutton = document.getElementById("login-button");

setInterval(() => {
    if (!email.value || !password.value) {
        lbutton.classList.add("disabled");
    } else {
        lbutton.classList.remove("disabled");
    }
}, 500);
