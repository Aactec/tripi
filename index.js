let scrollBody = document.querySelector(".revgrid");
let rightArrow = document.getElementById("rightArrow");
let leftArrow = document.getElementById("leftArrow");

let destBody = document.querySelector(".destgrid");
let rightDest = document.getElementById("rightDest");
let leftDest = document.getElementById("leftDest");

let carouselBody = document.querySelector(".imagecarousel");
let rightCarousel = document.getElementById("arright");
let leftCarousel = document.getElementById("arleft");

let modal = document.getElementById("bookings");

const navLinks = document.getElementById("navLink");



function showMenu() {
    navLinks.style.display = "block";
}
function hideMenu() {
    navLinks.style.display = "none";
}

rightArrow.addEventListener("click", () => {
    scrollBody.style.scrollBehavior = "smooth";
    scrollBody.scrollLeft += 314;
});
leftArrow.addEventListener("click", () => {
    scrollBody.style.scrollBehavior = "smooth";
    scrollBody.scrollLeft -= 314;
});

rightDest.addEventListener("click", () => {
    destBody.style.scrollBehavior = "smooth";
    destBody.scrollLeft += 340;
});
leftDest.addEventListener("click", () => {
    destBody.style.scrollBehavior = "smooth";
    destBody.scrollLeft -= 340;
});

rightCarousel.addEventListener("click", () => {
    carouselBody.style.scrollBehavior = "smooth";
    carouselBody.scrollLeft += 264;
});
leftCarousel.addEventListener("click", () => {
    carouselBody.style.scrollBehavior = "smooth";
    carouselBody.scrollLeft -= 264;
});

function openModal() {
    modal.classList.add("open");
}

function closeModal() {
    modal.classList.remove("open");
}