document.addEventListener('DOMContentLoaded', () => {
  // Responsive nav toggle
  const toggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  // Carousel swipe functionality
  const track = document.getElementById('carouselTrack');
  if (track) {
    let startX = 0;
    let currentX = 0;
    let currentSlide = 0;
    const totalSlides = track.children.length;

    const updateSlide = () => {
      track.style.transform = `translateX(-${currentSlide * 100}vw)`;
    };

    track.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    });

    track.addEventListener('touchmove', (e) => {
      currentX = e.touches[0].clientX;
    });

    track.addEventListener('touchend', () => {
      const delta = startX - currentX;

      if (delta > 50 && currentSlide < totalSlides - 1) {
        currentSlide++;
      } else if (delta < -50 && currentSlide > 0) {
        currentSlide--;
      }

      updateSlide();
    });
  }
});

const carousel = document.getElementById("carousel");
    const dots = document.querySelectorAll(".dot");
    const nextBtn = document.getElementById("next");
    const prevBtn = document.getElementById("prev");

    let currentIndex = 0;

    function updateCarousel() {
      const cardWidth = document.querySelector(".card").offsetWidth + 20;
      const offset = currentIndex * -cardWidth;
      carousel.style.transform = `translateX(${offset}px)`;
      dots.forEach((dot, idx) => {
        dot.classList.toggle("active", idx === currentIndex);
      });
    }

    nextBtn.addEventListener("click", () => {
      if (currentIndex < dots.length - 1) {
        currentIndex++;
        updateCarousel();
      }
    });

    prevBtn.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });

    dots.forEach((dot, idx) => {
      dot.addEventListener("click", () => {
        currentIndex = idx;
        updateCarousel();
      });
    });

    window.addEventListener("resize", updateCarousel);
    updateCarousel();