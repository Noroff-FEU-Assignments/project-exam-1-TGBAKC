document.addEventListener("DOMContentLoaded", function () {
  // Form validation
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevents form submission until validation is complete

      let isValid = true;
      let errorMessage = "";

      // Validate Name
      let name = document.getElementById("name").value;
      if (name.length < 5) {
        errorMessage = "Name should be more than 5 characters long";
        document.getElementById("errorName").innerText = errorMessage;
        isValid = false;
      } else {
        document.getElementById("errorName").innerText = "";
      }

      // Validate Email
      let email = document.getElementById("email").value;
      if (!email.includes("@") || !email.includes(".")) {
        errorMessage = "Please enter a valid email address";
        document.getElementById("errorEmail").innerText = errorMessage;
        isValid = false;
      } else {
        document.getElementById("errorEmail").innerText = "";
      }

      // Validate Subject
      let subject = document.getElementById("subject").value;
      if (subject.length <= 15) {
        // Subject 15 karakter veya daha kısa ise
        errorMessage = "Subject should be more than 15 characters long";
        document.getElementById("errorSubject").innerText = errorMessage; // Hata mesajını göster
        isValid = false;
      } else {
        document.getElementById("errorSubject").innerText = ""; // Hata mesajını temizle
      }

      // Validate Message
      let message = document.getElementById("message").value;
      if (message.length < 25) {
        errorMessage = "Message content should be more than 25 characters long";
        document.getElementById("errorMessage").innerText = errorMessage;
        isValid = false;
      } else {
        document.getElementById("errorMessage").innerText = "";
      }

      if (isValid) {
        // If all validations pass, submit the form or handle it as needed
        console.log("Form is valid. Handling submission...");
        // Here you can write code to submit the form data using AJAX or any other method
      }
    });
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
