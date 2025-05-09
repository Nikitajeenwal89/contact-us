function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');
  
    errorMessage.textContent = '';
    successMessage.textContent = '';
  
    // Validate name
    if (name.trim() === '') {
      errorMessage.textContent = 'Please enter your full name.';
      return false;
    }
  
    // Validate email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      errorMessage.textContent = 'Please enter a valid email address.';
      return false;
    }
  
    // Validate message
    if (message.trim() === '') {
      errorMessage.textContent = 'Please enter your message.';
      return false;
    }
  
    // Success message
    successMessage.textContent = 'Your message has been sent successfully!';
    return false;  // Prevent actual form submission for demo purposes
  }
  