const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

images.forEach(img => {
    img.addEventListener("click", function () {
        lightbox.style.display = "block";
        lightboxImg.src = this.getAttribute("data-full");
    });
});

closeBtn.addEventListener("click", function () {
    lightbox.style.display = "none";
});
