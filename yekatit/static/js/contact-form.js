document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const successMessageContainer = document.getElementById('success-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Create a FormData object from the form
        const formData = new FormData(form);

        // Send an AJAX request to the server
        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'X-Requested-With': 'XMLHttpRequest', // Mark this as an AJAX request
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Display success message
                successMessageContainer.textContent = data.message;
                successMessageContainer.classList.add('alert-success');
                successMessageContainer.style.display = 'block';

                // Clear form fields
                form.reset();
            } else {
                // Handle validation errors
                let errorMessage = '';
                for (const field in data.errors) {
                    errorMessage += `${field}: ${data.errors[field].join(', ')}\n`;
                }
                alert(errorMessage); // Display error messages
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while submitting the form.');
        });
    });
});
