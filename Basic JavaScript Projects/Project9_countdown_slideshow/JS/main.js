function countdown() {
    var seconds = Number(document.getElementById("seconds").value);
    var timer = document.getElementById("timer");

    function tick() {
        if (seconds < 0) {
            alert("Time's up!");
            timer.innerHTML = "";
        } else {
            timer.innerHTML = seconds;
            seconds--;
            setTimeout(tick, 1000);
        }
    }

    tick();
}



let slideIndex = 0;
const slides = document.querySelectorAll(".mySlides");
const dots = document.querySelectorAll(".dot");

function showSlide(n) {
  slides.forEach(slide => slide.style.display = "none");
  dots.forEach(dot => dot.classList.remove("active"));
  slideIndex = (n + slides.length) % slides.length;

  slides[slideIndex].style.display = "block";
  dots[slideIndex].classList.add("active");
}

function plusSlides(n) {
  showSlide(slideIndex + n);
}

function currentSlide(n) {
  showSlide(n);
}

showSlide(slideIndex);

setInterval(() => plusSlides(1), 5000);

