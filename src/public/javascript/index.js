const searchArea = document.querySelector(
  "#navbarSupportedContent > ul:nth-child(1) > li:nth-child(2)"
);
const body = document.querySelector("body");

searchArea.addEventListener("mouseenter", (e) => {
  let divAlert = document.createElement("div");
  let textAlert = document.createElement("span");
  divAlert.className = "alertPopup";
  textAlert.innerText = "Hello World";
  divAlert.appendChild(textAlert);

  body.appendChild(divAlert);

  console.log(e);
});

searchArea.addEventListener("mouseleave", () => {
  console.log("Mouse saiu");
});
