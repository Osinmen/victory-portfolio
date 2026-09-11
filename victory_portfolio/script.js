const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});


// Close mobile menu when a navigation link is clicked

const links = document.querySelectorAll("#navLinks a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});


// Automatically display the current year

document.getElementById("year").textContent = new Date().getFullYear();