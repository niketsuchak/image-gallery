const images = document.querySelectorAll('.collage-image');

  images.forEach((image, index) => {
    const delay = 0.1 * index;
    image.style.animation = `fadeInUp 0.5s ease-out ${delay}s both`;
  });

  