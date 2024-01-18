document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".carousel-container");
    const prevButton = document.querySelector(".prev-slide");
    const nextButton = document.querySelector(".next-slide");
  
    let slideIndex = 0;
  
    nextButton.addEventListener("click", function() {
      slideIndex++;
      showSlides();
    });
  
    prevButton.addEventListener("click", function() {
      slideIndex--;
      showSlides();
    });
  
    function showSlides() {
      const slides = document.querySelectorAll(".carousel-slide");
      
      if (slideIndex < 0) {
        slideIndex = slides.length - 1;
      } else if (slideIndex >= slides.length) {
        slideIndex = 0;
      }
  
      container.style.transform = `translateX(-${slideIndex * 25}%)`;
    }
  
    showSlides();
  });
  