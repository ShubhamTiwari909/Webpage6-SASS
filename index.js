const header = document.getElementById("header");
const navigation = document.getElementById("navbar");
const navButtons = document.getElementById("nav-buttons");
const logo = document.getElementById("logo");
const hamburger = document.getElementById("hamburger");
const elements = document.getElementsByClassName('nav-link');
const bodyElement = document.getElementById('body');



const dropdownNavigation = () => {
    if (navigation.style.display === "none" && navButtons.style.display === "none") {
        header.style.height = "102vh";
        header.style.backgroundColor = "white";
        header.style.top = "0";

        navigation.style.display = "flex";
        navButtons.style.display = "flex";

        logo.style.color = "black";
        hamburger.style.color = "black";

        bodyElement.style.height = "100%";
        bodyElement.style.overflowY = "hidden";

        for (let i = 0; i < elements.length; i++) {
            elements[i].style.color = "#333";
        }
    }
    else {
        header.style.height = "0";
        header.style.backgroundColor = "transparent";
        header.style.top = "40px";

        navigation.style.display = "none";
        navButtons.style.display = "none";

        logo.style.color = "white";
        hamburger.style.color = "white";

        bodyElement.style.overflowY = "auto";


        for (let i = 0; i < elements.length; i++) {
            elements[i].style.color = "white";
        }
        scrolledNavigation();

    }
}


function changingMediaQuery() {
    header.style.height = "0";
    header.style.backgroundColor = "transparent";
    header.style.top = "40px";

    logo.style.color = "white";
    hamburger.style.color = "white";

    for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = "white";
        bodyElement.style.overflowY = "auto";
    }

    if (window.innerWidth >= 100) {
        bodyElement.style.overflowY = "auto";
        navigation.style.display = "flex";
        navButtons.style.display = "flex";
    }
    if (window.innerWidth >= 808) {
        header.style.backgroundColor = "transparent";
    }

    else {
        navigation.style.display = "none";
        navButtons.style.display = "none";
    }
    scrolledNavigation();
}

window.addEventListener('resize', changingMediaQuery);

let scrolledNavigation = () => {
    "use strict";
    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
        header.style.height = "60px"
        header.style.top = "0"
        header.style.padding = "20px 0 0"
        header.style.backgroundColor = "black";
    }
    else {
        header.style.height = "100px"
        header.style.backgroundColor = "transparent";
        header.style.top = "40px"
        header.style.padding = "0"
    }
};

window.onscroll = scrolledNavigation