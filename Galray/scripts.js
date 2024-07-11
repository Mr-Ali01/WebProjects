// scripts.js

document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxCaption = document.getElementById("lightbox-caption");
    const closeBtn = document.querySelector(".close");

    document.querySelectorAll(".gallery-item").forEach(item => {
        item.addEventListener("click", (e) => {
            lightbox.style.display = "block";
            lightboxImg.src = e.target.src;
            lightboxCaption.textContent = e.target.alt;
        });
    });

    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});
