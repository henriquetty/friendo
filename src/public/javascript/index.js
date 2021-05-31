if (!(window.innerWidth <= 575)) {
    const searchArea = document.querySelector(
        "#navbarSupportedContent > ul:nth-child(1) > li:nth-child(2)"
    );

    let alertPopup = document.querySelector("div.alertPopup");
    let textPopup = document.querySelector("span.textPopup");

    searchArea.addEventListener("mouseenter", () => {
        let saW, saL, saT;

        saW = searchArea.getBoundingClientRect().width;
        saL = searchArea.getBoundingClientRect().left;
        saT = searchArea.getBoundingClientRect().top;

        alertPopup.style.visibility = "visible";
        alertPopup.style.top = `${saT * 8.5}px`;
        alertPopup.style.left = `${saL + saW / 2 - 100}px`;
        textPopup.innerText = "Log in to search!";
    });

    searchArea.addEventListener("mouseleave", () => {
        alertPopup.style.visibility = "hidden";
        alertPopup.style.top = `-9999px`;
        alertPopup.style.left = `-9999px`;
    });
}
