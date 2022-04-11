function displayMenu(){
    headerMenu.classList.toggle("active");
    burgerButton.classList.toggle("active");
    body.classList.toggle("active");
}

let burgerButton = document.getElementById("burgerButton");
let headerMenu = document.getElementById("headerMenu");
let body = document.getElementById("body");

burgerButton.addEventListener("click", displayMenu);