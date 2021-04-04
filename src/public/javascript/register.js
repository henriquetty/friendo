const fname = document.querySelector("#name");
const lname = document.querySelector("#surname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const rPassword = document.querySelector("#rpassword");
const birthdate = document.querySelector("#birthdate");
const regButton = document.querySelector("#registerWaves > main > div > div > div > form > button");

regButton.addEventListener("click", function (e) {
    let items = [fname, lname, email, password, rPassword, birthdate];

    if (password.value !== rPassword.value) {
        password.value = "";
        rPassword.value = "";
        e.preventDefault();
        alert("Password must match");
        return;
    }

    if (password.value.length < 8 || rPassword.value.length < 8) {
        e.preventDefault();
        alert("Password must be 8 characters or more.");
        return;
    }
});
