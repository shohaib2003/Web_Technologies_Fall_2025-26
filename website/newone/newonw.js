/* ------------------------------
PRELOADER
------------------------------ */
window.onload = () => {
    setTimeout(() => {
        document.getElementById("preloader").style.display = "none";
    }, 1000);
};

/* ------------------------------
MOBILE MENU
------------------------------ */
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/* ------------------------------
DARK MODE + SAVE MODE
------------------------------ */
const darkToggle = document.querySelector(".dark-toggle");

if (localStorage.getItem("dark") === "true") {
    document.body.classList.add("dark-mode");
}

darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("dark", document.body.classList.contains("dark-mode"));
});

/* ------------------------------
SWIPER SLIDER
------------------------------ */
let index = 0;

function slider() {
    const slides = document.querySelectorAll(".swiper-slide");
    slides.forEach((s) => (s.style.display = "none"));
    index++;
    if (index > slides.length) index = 1;
    slides[index - 1].style.display = "block";
    setTimeout(slider, 2500);
}
slider();

/* ------------------------------
POPUP MODAL
------------------------------ */
const modal = document.querySelector(".modal");
document.querySelector(".open-modal").onclick = () => modal.classList.add("show");
document.querySelector(".close-modal").onclick = () => modal.classList.remove("show");

/* ------------------------------
TYPING ANIMATION
------------------------------ */
let i = 0;
const text = "Welcome to My Beautiful Website!";

function typeEffect() {
    const typing = document.querySelector(".typing");
    if (i < text.length) {
        typing.textContent += text.charAt(i);
        i++;
        setTimeout(typeEffect, 70);
    }
}
typeEffect();

/* ------------------------------
SCROLL ANIMATION (AOS-Like)
------------------------------ */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
        if (e.isIntersecting) {
            e.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".service, .member, .plan, .gallery-grid img").forEach((el) =>
    observer.observe(el)
);

/* ------------------------------
FORM VALIDATION
------------------------------ */
document.querySelector("form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message Sent!");
});
