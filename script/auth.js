$(document).ready(function() {
    // Form submission handler
    $('form').on('submit', function(e) {
        e.preventDefault();
        
        // Reset previous error states
        $('.error-message').remove();
        $('.my-input').removeClass('error');
        
        let isValid = true;
        
        // Name validation
        const name = $('#name').val().trim();
        if (name.length < 3) {
            showError('#name', 'Name must be at least 3 characters long');
            isValid = false;
        }
        
        // Email validation
        const email = $('#email').val().trim();
        if (!email.endsWith('@gmail.com')) {
            showError('#email', 'Please enter a valid Gmail address');
            isValid = false;
        }
        
        // Password validation
        const password = $('#subjek').val(); // Note: Consider renaming this ID to 'password'
        if (password.length < 6) {
            showError('#subjek', 'Password must be at least 6 characters long');
            isValid = false;
        }
        
        // Age validation (13 or older)
        const age = parseInt($('input[type="number"]').val());
        if (isNaN(age) || age < 13) {
            showError('input[type="number"]', 'You must be 13 years or older to register');
            isValid = false;
        }
        
        // Gender validation
        if (!$('input[name="gender"]:checked').length) {
            showError('.radio-group', 'Please select a gender');
            isValid = false;
        }
        
        // If form is valid, you can submit it
        if (isValid) {
            // Here you would typically send the data to your server
            alert('Form submitted successfully!');
            this.reset(); // Reset form
        }
    });
    
    // Helper function to show error messages
    function showError(selector, message) {
        const element = $(selector);
        element.addClass('error');
        element.after(`<div class="error-message">${message}</div>`);
    }
    
    // Real-time validation as user types
    $('.my-input').on('input', function() {
        $(this).removeClass('error');
        $(this).next('.error-message').remove();
    });
    
    // Remove error when radio button is selected
    $('input[type="radio"]').on('change', function() {
        $('.radio-group .error-message').remove();
    });
    
    // Real-time age validation
    $('input[type="number"]').on('input', function() {
        const age = parseInt($(this).val());
        if (age < 13) {
            showError(this, 'You must be 13 years or older to register');
        } else {
            $(this).removeClass('error');
            $(this).next('.error-message').remove();
        }
    });
});