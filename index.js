const navLinks = document.getElementById("navLink");

let modal = document.getElementById("bookings");

let nav = document.getElementById("aside")

const heroSection = document.querySelector('.hero-section'),
heroScrollDiv = heroSection.querySelector('.scrollimage'),
heroControlRight =  heroSection.querySelector('#arright'),
heroControlLeft = heroSection.querySelector('#arleft'),
heroScrollImgs = heroScrollDiv.querySelectorAll('.imagecarousel');
let heroScrollCount = 1;

let scrollBody = document.querySelector(".revgrid");
let rightArrow = document.getElementById("rightArrow");
let leftArrow = document.getElementById("leftArrow");

let destBody = document.querySelector(".destgrid");
let rightDest = document.getElementById("rightDest");
let leftDest = document.getElementById("leftDest");




function showMenu() {
    navLinks.style.display = "block";
}
function hideMenu() {
    navLinks.style.display = "none";
}


heroControlLeft.addEventListener('click', function () {
    if (heroScrollCount !== heroScrollImgs.length - 1) {
        ++heroScrollCount
    }
    heroScrollImgs.forEach((img, i) => {
        let posCalc = i - heroScrollCount;
        if (posCalc === 0) {
            img.classList.remove('abs')
        } else {
            img.classList.add('abs')
        }
        img.style.translate = `${posCalc * 180}%  0px`
    })
});
heroControlRight.addEventListener('click', function () {
    if (heroScrollCount !== 0) {
        --heroScrollCount
    }
    heroScrollImgs.forEach((img, i) => {
        let posCalc = i - heroScrollCount;
        if (posCalc === 0) {
            img.classList.remove('abs')
        } else {
            img.classList.add('abs')
        }
        img.style.translate = `${posCalc * 180}%  0px`
    })
});

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

function openModal() {
    modal.classList.add("open");
}

function closeModal() {
    modal.classList.remove("open");
}

function showItems() {
    nav.style.display = "block";
}
function closeItems() {
    nav.style.display = "none";
}