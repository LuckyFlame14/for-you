const slides = document.querySelectorAll(".slide");
const music = document.getElementById("bgMusic");
const muteBtn = document.getElementById("muteBtn");

let current = 0;
let started = false;

function showSlide(index) {
  slides.forEach(s => s.classList.remove("active"));
  slides[index].classList.add("active");
}

function nextSlide(e) {
  if (e) e.stopPropagation();

  if (!started) {
    music.play().catch(() => {});
    started = true;
  }

  if (current < slides.length - 1) {
    current++;
    showSlide(current);
  }
}

function prevSlide(e) {
  if (e) e.stopPropagation();
  if (current > 0) {
    current--;
    showSlide(current);
  }
}

function replay(e) {
  e.stopPropagation();
  current = 0;
  showSlide(current);
}

function toggleMusic() {
  if (music.muted) {
    music.muted = false;
    muteBtn.textContent = "🔊";
  } else {
    music.muted = true;
    muteBtn.textContent = "🔇";
  }
}
