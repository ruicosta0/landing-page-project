/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const sections = document.querySelectorAll("[data-nav]");

const navbarMenu = document.querySelector("#navbar__list");

const navBar = document.getElementsByClassName("navbar__menu");

const figures = document.querySelectorAll("figure");

const images = document.querySelectorAll("img");

const topButton = document.getElementById("topbtn");

/**
 * End Global Variables

 * Begin Main Functions
 * 
*/

// build the nav

for(let i = 0; i <sections.length; i++) {
    newSection = sections[i].getAttribute("data-nav");
    newList = document.createElement("li")
    newList.innerText = newSection
    newList.className = "listItem"
    navbarMenu.appendChild(newList)
};

// Position button to active section

 function setActiveClass () {
    navBar[0].style.display = "block";
    for(let i = 0; i<sections.length; i++) {
        element = sections[i].getBoundingClientRect();
        //checking whether at top of viewport
        if (element.top >= -20 && element.bottom <= window.innerHeight) {
           sections[i].classList.add("your-active-class");
           sections[i].appendChild(topbtn);
        } else {
           sections[i].classList.remove("your-active-class");
        }
    } timeOut();
};

// Scroll to anchor ID using scrollTO event

function respondToTheClick(evt) {
    sectionName = evt.target.textContent;
    destination = sectionName.toLowerCase().replace(/ /g,'');
    scroll_to_destination = document.getElementById(destination);
    window.scroll({
        behavior: "smooth",
        left: 0,
        top: scroll_to_destination.offsetTop,
    })
};

// Return to top of screen button

function returnToTop(evt) {
    window.scroll( {
        behavior: "smooth",
        left: 0,
        top: 0,
    }
)};

// Hide navbar timeout

function timeOut() {
    setTimeout(function() {
        navBar[0].style.display = "none";}, 10000)
    };

// Define class name for figure elements

total = 1

for(i=0; i<figures.length; i++) {
    if(total%2 == 0) {
        figures[i].classList = "image__container__even";
        total += 1;
    } else {
        figures[i].classList = "image__container__odd";
        total += 1;
    }
};

// Define class names for image elements

total_images = 1

for(i=0; i<images.length; i++) {
    if(total_images%2 == 0) {
        images[i].classList = "images__even";
        total_images += 1;
    } else {
        images[i].classList = "images__odd";
        total_images += 1;
    }
};

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Hide navbar

window.addEventListener("load", timeOut());

// Scroll to section on link click

navbarMenu.addEventListener("click", respondToTheClick);

// Set sections as active

window.addEventListener("scroll", setActiveClass);

// Return to top of viewport

topButton.addEventListener("click", returnToTop);

window.addEventListener("load", returnToTop);


