let burger = document.querySelector(".burger");
let navLinks = document.querySelector("#nav-links");

burger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

burger.addEventListener("click", function () {
    burger.classList.toggle("burger-x")
})
