document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const captionText = document.getElementById("caption");
    const counterText = document.getElementById("image-counter");
    
    // Get buttons
    const closeBtn = document.querySelector(".lightbox-close");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    
    const images = Array.from(document.querySelectorAll(".grid-item img"));
    let currentIndex = 0;

    const updateLightbox = (index) => {
        if (index < 0) index = images.length - 1;
        if (index >= images.length) index = 0;
        
        currentIndex = index;
        lightboxImg.src = images[currentIndex].src;
        captionText.innerText = images[currentIndex].alt || "Aroma Yoga Centre";
        counterText.innerText = `${currentIndex + 1} / ${images.length}`;
    };

    images.forEach((img, idx) => {
        img.addEventListener("click", () => {
            updateLightbox(idx);
            lightbox.style.display = "flex";
            document.body.style.overflow = "hidden";
        });
    });

    nextBtn.addEventListener("click", () => updateLightbox(currentIndex + 1));
    prevBtn.addEventListener("click", () => updateLightbox(currentIndex - 1));
    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
        document.body.style.overflow = "auto";
    });

    // Close on background click
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
});

