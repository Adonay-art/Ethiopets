document.addEventListener('DOMContentLoaded', () => {
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
