document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    var isValid = validateEmail(email) && validatePassword(password);
  
    if (isValid) {
      document.getElementById("message").textContent = "Registration successful!";
      
      // Additional code to submit the form or perform further actions
    } else {
      document.getElementById("message").textContent = "Invalid email or password.   Please try again.";
    }
  });
  
  function validateEmail(email) {
    // Email validation regex pattern
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
  
  function validatePassword(password) {
    // Password should be at least 6 characters long
    return password.length >= 6;
  }     
  function login() {
    window.open("facebook.html")
  }