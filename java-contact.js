document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let isValid = true;
    let errorMessage = "";
    let name = document.getElementById("name").value;
    if (name.length < 5) {
      errorMessage = "Name should be more than 5 characters long";
      document.getElementById("errorName").innerText = errorMessage;
      isValid = false;
    } else {
      document.getElementById("errorName").innerText = "";
    }
    let email = document.getElementById("email").value;
    if (!email.includes("@") || !email.includes(".")) {
      errorMessage = "Please enter a valid email address";
      document.getElementById("errorEmail").innerText = errorMessage;
      isValid = false;
    } else {
      document.getElementById("errorEmail").innerText = "";
    }
    let subject = document.getElementById("subject").value;
    if (subject.length <= 15) {
      errorMessage = "Subject should be more than 15 characters long";
      document.getElementById("errorSubject").innerText = errorMessage;
      isValid = false;
    } else {
      document.getElementById("errorSubject").innerText = "";
    }
    let message = document.getElementById("message").value;
    if (message.length < 25) {
      errorMessage = "Message content should be more than 25 characters long";
      document.getElementById("errorMessage").innerText = errorMessage;
      isValid = false;
    } else {
      document.getElementById("errorMessage").innerText = "";
    }
    if (isValid) {
      console.log("Form is valid. Handling submission...");
    }
  });
});

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
