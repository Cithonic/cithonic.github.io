
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector("header").style.backgroundColor = "rgba(44, 44, 46, 0.8)"; /* Make navbar light transparent */
    } else {
        document.querySelector("header").style.backgroundColor = "#2C2C2E"; /* Revert to original color */
    }
}
    // Wait for the DOM to be fully loaded
    document.addEventListener("DOMContentLoaded", function() {
        // Select the logo container
        var logoContainer = document.querySelector('.company-name');

        // Add click event listener
        logoContainer.addEventListener('click', function() {
            // Scroll to the top of the page
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // For smooth scrolling
            });
        });
    });
