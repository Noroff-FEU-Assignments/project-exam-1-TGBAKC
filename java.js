document.addEventListener("DOMContentLoaded", function() {
  const carouselContainer = document.querySelector(".carousel-container");
  const slides = Array.from(document.querySelectorAll(".carousel-slide"));
  const slideWidth = slides[0].offsetWidth;
  let currentIndex = 0;

  // Slaytların klonlarını oluştur ve karusel konteynerine ekle
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);
  carouselContainer.append(firstClone);
  carouselContainer.prepend(lastClone);

  // Karuseli başlangıç pozisyonuna ayarla
  carouselContainer.style.transform = `translateX(${-slideWidth}px)`;

  function moveCarousel(newIndex) {
      // Döngüsel hareket için indeksi güncelle
      currentIndex = newIndex;
      if(newIndex >= slides.length) {
          currentIndex = 0;
          carouselContainer.style.transition = "none";
          carouselContainer.style.transform = `translateX(${-(currentIndex + 1) * slideWidth}px)`;
          setTimeout(() => {
              carouselContainer.style.transition = "transform 0.3s ease-out";
              moveCarousel(currentIndex);
          }, 0);
      } else if(newIndex < 0) {
          currentIndex = slides.length - 1;
          carouselContainer.style.transition = "none";
          carouselContainer.style.transform = `translateX(${-(currentIndex + 1) * slideWidth}px)`;
          setTimeout(() => {
              carouselContainer.style.transition = "transform 0.3s ease-out";
              moveCarousel(currentIndex);
          }, 0);
      } else {
          carouselContainer.style.transition = "transform 0.3s ease-out";
          carouselContainer.style.transform = `translateX(${-(currentIndex + 1) * slideWidth}px)`;
      }
  }

  document.querySelector(".next-slide").addEventListener("click", () => {
      moveCarousel(currentIndex + 1);
  });

  document.querySelector(".prev-slide").addEventListener("click", () => {
      moveCarousel(currentIndex - 1);
  });
});



    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents form submission until validation is complete

        let isValid = true;
        let errorMessage = '';

        // Validate Name
        let name = document.getElementById('name').value;
        if (name.length < 5) {
            errorMessage = 'Name should be more than 5 characters long';
            document.getElementById('errorName').innerText = errorMessage;
            isValid = false;
        } else {
            document.getElementById('errorName').innerText = '';
        }

        // Validate Email
        let email = document.getElementById('email').value;
        if (!email.includes('@') || !email.includes('.')) {
            errorMessage = 'Please enter a valid email address';
            document.getElementById('errorEmail').innerText = errorMessage;
            isValid = false;
        } else {
            document.getElementById('errorEmail').innerText = '';
        }
// Validate Subject
let subject = document.getElementById('subject').value;
if (subject.length <= 15) { // Subject 15 karakter veya daha kısa ise
    errorMessage = 'Subject should be more than 15 characters long';
    document.getElementById('errorSubject').innerText = errorMessage; // Hata mesajını göster
    isValid = false;
} else {
    document.getElementById('errorSubject').innerText = ''; // Hata mesajını temizle
}

        // Validate Message
        let message = document.getElementById('message').value;
        if (message.length < 25) {
            errorMessage = 'Message content should be more than 25 characters long';
            document.getElementById('errorMessage').innerText = errorMessage;
            isValid = false;
        } else {
            document.getElementById('errorMessage').innerText = '';
        }

        if (isValid) {
            // If all validations pass, submit the form or handle it as needed
            console.log("Form is valid. Handling submission...");
            // Here you can write code to submit the form data using AJAX or any other method
        }
    });
   
    navBarToggle.addEventListener('click', function () {
        isMenuOpen = !isMenuOpen;
        console.log("Menu State:", isMenuOpen); // Check the toggle state
    
        if (isMenuOpen) {
            mainNav.classList.add('active');
        } else {
            mainNav.classList.remove('active');
        }
    });
    document.addEventListener('DOMContentLoaded', function () {
        mainNav.classList.remove('active'); // Ensure menu is hidden on load
    
        // Rest of your code...
    });
    
    