const fname = document.querySelector("#name");
const lname = document.querySelector("#surname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const rPassword = document.querySelector("#rpassword");
const birthdate = document.querySelector("#birthdate");

const regButton = document.querySelector("#registerWaves > main > div > div > div > form > button");

const elements = [fname, lname, email, password, rPassword, birthdate];

fname.addEventListener("blur", (e) => {
    fname.value = fname.value.trim();
});

lname.addEventListener("blur", (e) => {
    lname.value = lname.value.trim();
});

email.addEventListener("blur", (e) => {
    email.value = email.value.trim();
});

regButton.addEventListener("click", function (e) {
    if (password.value !== rPassword.value) {
        e.preventDefault();
        password.value = "";
        rPassword.value = "";
        alert("Password must match");
        return;
    }

    if (password.value.length < 8 || rPassword.value.length < 8) {
        e.preventDefault();
        alert("Password must be 8 characters or more.");
        return;
    }
});

setInterval(() => {
    if (
        !fname.value.trim() ||
        !lname.value.trim() ||
        !email.value.trim() ||
        !password.value.trim() ||
        !rPassword.value.trim() ||
        !birthdate.value.trim()
    ) {
        regButton.classList.add("disabled");
    } else {
        regButton.classList.remove("disabled");
    }
}, 500);
