const navLinks = document.getElementById("navLink");
function showMenu() {
    navLinks.style.right = "0%";
}
function hideMenu() {
    navLinks.style.right = "-100%";
}

let scrollBody = document.querySelector(".revgrid");
let rightArrow = document.getElementById("rightArrow");
let leftArrow = document.getElementById("leftArrow");

rightArrow.addEventListener("click", () => {
    scrollBody.style.scrollBehavior = "smooth";
    scrollBody.scrollLeft += 314;
});
leftArrow.addEventListener("click", () => {
    scrollBody.style.scrollBehavior = "smooth";
    scrollBody.scrollLeft -= 314;
});

let destBody = document.querySelector(".destgrid");
let rightDest = document.getElementById("rightDest");
let leftDest = document.getElementById("leftDest");

rightDest.addEventListener("click", () => {
    destBody.style.scrollBehavior = "smooth";
    destBody.scrollLeft += 340;
});
leftDest.addEventListener("click", () => {
    destBody.style.scrollBehavior = "smooth";
    destBody.scrollLeft -= 340;
});

let carouselBody = document.querySelector(".imagecarousel");
let rightCarousel = document.getElementById("arright");
let leftCarousel = document.getElementById("arleft");

rightCarousel.addEventListener("click", () => {
    carouselBody.style.scrollBehavior = "smooth";
    carouselBody.scrollLeft += 264;
});
leftCarousel.addEventListener("click", () => {
    carouselBody.style.scrollBehavior = "smooth";
    carouselBody.scrollLeft -= 264;
});