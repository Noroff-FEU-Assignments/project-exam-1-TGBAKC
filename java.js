document.addEventListener("DOMContentLoaded", function () {
  const carouselContainer = document.querySelector(".carousel-container");
  const carouselSlides = document.querySelectorAll(".carousel-slide");
  const prevButton = document.querySelector(".prev-slide");
  const nextButton = document.querySelector(".next-slide");


  let totalWidth = 0;
  carouselSlides.forEach((slide) => {
      totalWidth += slide.offsetWidth;
  });

  
  carouselContainer.style.width = totalWidth + "px";

  
  function moveCarouselLeft() {
      const lastSlide = carouselContainer.lastElementChild;
      carouselContainer.insertBefore(
          lastSlide,
          carouselContainer.firstElementChild
      );
      carouselContainer.style.transition = "transform 0s"; 
      carouselContainer.style.transform =
          "translateX(" + -lastSlide.offsetWidth + "px)";
      setTimeout(() => {
          carouselContainer.style.transition = "transform 0.5s ease"; 
          carouselContainer.style.transform = "translateX(0)";
      }, 50); 
  }


  function moveCarouselRight() {
      const firstSlide = carouselContainer.firstElementChild;
      carouselContainer.appendChild(firstSlide);
      carouselContainer.style.transition = "transform 0s"; 
      carouselContainer.style.transform =
          "translateX(" + firstSlide.offsetWidth + "px)";
      setTimeout(() => {
          carouselContainer.style.transition = "transform 0.5s ease"; 
          carouselContainer.style.transform = "translateX(0)";
      }, 50); 
  }


  function handleSlideClick(event) {
      const imageUrl = event.target.getAttribute('src');
      fetchPostData(imageUrl);
  }


  function fetchPostData(imageUrl) {
 
      const apiUrl = 'https://akca.no/wp-json/wp/v2/posts';

     
      fetch(apiUrl)
          .then(response => response.json())
          .then(posts => {
        
              const post = posts.find(post => post.featured_media === imageUrl);
              
          
              console.log('Post Data:', post);
          })
          .catch(error => {
              console.error('Error fetching post data:', error);
          });
  }

  
  carouselSlides.forEach(slide => {
      slide.addEventListener('click', handleSlideClick); // 
  });


  prevButton.addEventListener("click", moveCarouselLeft);
  nextButton.addEventListener("click", moveCarouselRight);
});

/*  hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
      x.style.display = "none";
  } else {
      x.style.display = "block";
  }
}
