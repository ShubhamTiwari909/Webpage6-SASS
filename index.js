const header = document.getElementById("header");
const navigation = document.getElementById("navbar");
const navButtons = document.getElementById("nav-buttons");
const logo = document.getElementById("logo");
const hamburger = document.getElementById("hamburger");
const navIcon = document.getElementById("nav-icon");
const elements = document.getElementsByClassName('nav-link');
const bodyElement = document.getElementById('body');
const pricingCard = document.getElementsByClassName("card");
const comment = document.querySelectorAll(".review-card");


let counter = 0;

comment.forEach((element, index) => {
    element.style.left = `${index * 110}%`
});


const prevComment = () => {
    counter--;
    slideCard();
}

const nextComment = () => {
    counter++;
    slideCard();
}

const slideCard = () => {
    comment.forEach(element => {
        element.style.transform = `translateX(-${counter * 112}%)`
    });
}


const handleMouseIn = value => {
    for (let i = 0; i < pricingCard.length; i++) {
        if (i === value) {
            pricingCard[i].style.backgroundColor = "#fff";
            pricingCard[i].style.borderTop = "3px solid #0a8aff";
            pricingCard[i].style.boxShadow = "0 7px 24px 0 rgba(83, 83, 83, 0.1)";
        }
        else {
            pricingCard[i].style.backgroundColor = "transparent";
            pricingCard[i].style.borderTop = "none";
            pricingCard[i].style.boxShadow = "0 0 0 0 rgba(83, 83, 83, 0.1)";
        }
    }
};

const handleMouseOut = () => {
    for (let i = 0; i < pricingCard.length; i++) {
        pricingCard[i].style.backgroundColor = "transparent";
        pricingCard[i].style.borderTop = "none";
        pricingCard[i].style.boxShadow = "0 0 0 0 rgba(83, 83, 83, 0.1)";
    }
    scrolledNavigation();
}







const dropdownNavigation = () => {
    if (navigation.style.display === "none" && navButtons.style.display === "none") {
        header.style.height = "102vh";
        header.style.backgroundColor = "white";
        header.style.top = "0";
        header.style.padding = "20px 0 0 0"

        navigation.style.display = "flex";
        navButtons.style.display = "flex";

        logo.style.color = "black";
        hamburger.style.color = "black";
        navIcon.classList.remove("fa-bars");
        navIcon.classList.add("fa-x");


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
        navIcon.classList.add("fa-bars");
        navIcon.classList.remove("fa-x");

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

window.addEventListener('resize', changingMediaQuery, nextComment, prevComment);

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