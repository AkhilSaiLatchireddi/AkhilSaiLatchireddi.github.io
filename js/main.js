// This file contains the JavaScript code for the website. 
// It may include functions for interactivity, such as form validation or dynamic content updates.

document.addEventListener('DOMContentLoaded', function() {
    // Example function to display a welcome message
    function displayWelcomeMessage() {
        const welcomeElement = document.createElement('div');
        welcomeElement.textContent = "Welcome to Akhil Sai Latchireddi's Personal Website!";
        welcomeElement.style.fontSize = '24px';
        welcomeElement.style.textAlign = 'center';
        welcomeElement.style.marginTop = '20px';
        document.body.prepend(welcomeElement);
    }

    displayWelcomeMessage();

    // Add more interactivity functions as needed
});