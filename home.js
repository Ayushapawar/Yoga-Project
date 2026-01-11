// home.js
document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user) {
        window.location.href = "index.html";
    } else {
        const heroH2 = document.querySelector('.hero h2');
        heroH2.innerText = `Namaste, ${user.name}`;
    }
});

function logout() {
    window.location.href = "index.html";
}

let slideIndex = 0;
let autoSlideInterval;

// Initialize Slider
showSlides(slideIndex);
startAutoSlide();

function changeSlide(n) {
    showSlides(slideIndex += n);
    resetTimer(); // Restarts the timer when a user clicks manually
}

function currentSlide(n) {
    showSlides(slideIndex = n);
    resetTimer();
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        dots[i].classList.remove("active");
    }

    slides[slideIndex].classList.add("active");
    dots[slideIndex].classList.add("active");
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        changeSlide(1);
    }, 5000); // Changes image every 5 seconds
}

function resetTimer() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}