const header = document.getElementById("header");
const navigation = document.getElementById("navbar");
const navButtons = document.getElementById("nav-buttons");
const logo = document.getElementById("logo");
const hamburger = document.getElementById("hamburger");
const navIcon = document.getElementById("nav-icon");
const elements = document.getElementsByClassName('nav-link');
const bodyElement = document.getElementById('body');
const pricingCard = document.getElementsByClassName("card");
const cards = document.querySelectorAll(".review-card");
const cardText = document.querySelectorAll('.review-card-text')
const cardUserText = document.querySelectorAll('.review-card-user');
const cardLogo = document.querySelectorAll('.review-card-logo');
const dots = document.querySelectorAll('.dot');


const slider = (count) => {
    for (let index = 0; index < cards.length; index++) {
        if (index === count) {
            cards[index].style.backgroundColor = "#1fdb84";
            cards[index].style.color = "white";
            cardText[index].style.color = "white";
            cardUserText[index].style.color = "white";
            cardLogo[index].src = "https://dl.dropboxusercontent.com/s/jrvy4nec2hyxtgh/group-6.png?dl=0"
            dots[index].style.backgroundColor = "#1fdb84"
        }
        else {
            cards[index].style.backgroundColor = "white";
            cardUserText[index].style.color = "#031d5b";
            cardText[index].style.color = "#5b6c94";
            cardLogo[index].src = "https://dl.dropboxusercontent.com/s/4mw6ondhuf2mv0s/group-7.png?dl=0"
            dots[index].style.backgroundColor = "transparent"

        }
        if (window.innerWidth >= 300) {
            cards[index].style.transform = `translateX(-${count * 290}px)`;
        }
        if (window.innerWidth >= 800) {
            cards[index].style.transform = `translateX(-${count * 400}px)`;
        }

    }
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

window.addEventListener('resize', changingMediaQuery, slider);

let scrolledNavigation = () => {
    "use strict";
    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
        header.style.height = "50px";
        header.style.top = "0";
        header.style.padding = "20px 0 0";
        header.style.backgroundColor = "#1fdb84";
    }
    else {
        header.style.height = "100px";
        header.style.backgroundColor = "transparent";
        header.style.top = "40px";
        header.style.padding = "0";
    }
};

window.onscroll = scrolledNavigation