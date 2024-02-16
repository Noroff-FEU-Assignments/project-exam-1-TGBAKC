document.addEventListener("DOMContentLoaded", function () {
  const carouselContainer = document.querySelector(".carousel-container");
  const carouselSlides = document.querySelectorAll(".carousel-slide");
  const prevButton = document.querySelector(".prev-slide");
  const nextButton = document.querySelector(".next-slide");

  
  // Calculate total width of carousel
  let totalWidth = 0;
  carouselSlides.forEach((slide) => {
    totalWidth += slide.offsetWidth;
  });

  // Set width of carousel container
  carouselContainer.style.width = totalWidth + "px";

  // Function to move carousel to the left
  function moveCarouselLeft() {
    const lastSlide = carouselContainer.lastElementChild;
    carouselContainer.insertBefore(
      lastSlide,
      carouselContainer.firstElementChild
    );
    carouselContainer.style.transition = "transform 0s"; // Disable transition
    carouselContainer.style.transform =
      "translateX(" + -lastSlide.offsetWidth + "px)";
    setTimeout(() => {
      carouselContainer.style.transition = "transform 0.5s ease"; // Re-enable transition
      carouselContainer.style.transform = "translateX(0)";
    }, 50); // Delay to ensure transition is re-enabled
  }

  // Function to move carousel to the right
  function moveCarouselRight() {
    const firstSlide = carouselContainer.firstElementChild;
    carouselContainer.appendChild(firstSlide);
    carouselContainer.style.transition = "transform 0s"; // Disable transition
    carouselContainer.style.transform =
      "translateX(" + firstSlide.offsetWidth + "px)";
    setTimeout(() => {
      carouselContainer.style.transition = "transform 0.5s ease"; // Re-enable transition
      carouselContainer.style.transform = "translateX(0)";
    }, 50); // Delay to ensure transition is re-enabled
  }

  // Event listeners for previous and next buttons
  prevButton.addEventListener("click", moveCarouselLeft);
  nextButton.addEventListener("click", moveCarouselRight);
});

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
