document.addEventListener('DOMContentLoaded', function() {
    // Select form fields
    const nameInput = document.getElementById('id_name');
    const emailInput = document.getElementById('id_email');
    const messageInput = document.getElementById('id_message');
    const phoneInput = document.getElementById('id_phone');

    // Add event listeners for real-time validation
    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    messageInput.addEventListener('input', validateMessage);
    phoneInput.addEventListener('input', validatePhone);

    function validateName() {
        const nameValue = nameInput.value;
        if (nameValue.length < 3) {
            nameInput.setCustomValidity('Name must be at least 3 characters long.');
        } else {
            nameInput.setCustomValidity('');
        }
    }

    function validateEmail() {
        const emailValue = emailInput.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailValue)) {
            emailInput.setCustomValidity('Please enter a valid email address.');
        } else {
            emailInput.setCustomValidity('');
        }
    }

    function validateMessage() {
        const messageValue = messageInput.value;
        if (messageValue.trim() === '') {
            messageInput.setCustomValidity('Message cannot be empty.');
        } else {
            messageInput.setCustomValidity('');
        }
    }

    function validatePhone() {
        const phoneValue = phoneInput.value;
        const phoneRegex = /^[0-9]{10}$/; // Adjust the regex according to your requirements
        if (!phoneRegex.test(phoneValue)) {
            phoneInput.setCustomValidity('Phone number must be 10 digits long.');
        } else {
            phoneInput.setCustomValidity('');
        }
    }
});