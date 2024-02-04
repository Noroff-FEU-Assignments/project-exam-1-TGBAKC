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
   
    document.addEventListener('DOMContentLoaded', function () {
      const navbarToggle = document.getElementById('js-navbar-toggle');
      const menu = document.getElementById('js-menu');
  
      navbarToggle.addEventListener('click', function () {
          menu.classList.toggle('active');
      });
  });
  