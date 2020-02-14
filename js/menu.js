function toggleMenu() {
    let getMenu = document.querySelector(".menuContent");
    getMenu.classList.toggle("hamburger");
}

let getHamburger = document.querySelector("#toggle");

getHamburger.addEventListener("click", toggleMenu);