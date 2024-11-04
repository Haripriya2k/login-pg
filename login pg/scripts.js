// Form Validation
document.querySelector('.login-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission for validation

    // Get form values
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Simple email and password validation
    if (email === '') {
        alert('Please enter your email address.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (password === '') {
        alert('Please enter your password.');
        return;
    }

    // If validation passes, allow form submission (for demo purposes, just alert success)
    alert('Login successful!');
    // In a real-world scenario, you would handle form submission here, e.g., send data to the server.
});

// Email Validation Function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Show/Hide Password Functionality
document.getElementById('password').addEventListener('focus', function() {
    // Show the password when the user focuses on the input
    this.type = 'text';
});

document.getElementById('login-button').addEventListener('click', function() {
    this.style.backgroundColor = '#4CAF50'; // Change to green color
});

document.getElementById('password').addEventListener('blur', function() {
    // Hide the password when the user leaves the input
    this.type = 'password';
});

// Toggle Remember Me
document.querySelector('[name="remember"]').addEventListener('change', function() {
    if (this.checked) {
        alert('You will be remembered!');
    } else {
        alert('You will not be remembered!');
    }
});
