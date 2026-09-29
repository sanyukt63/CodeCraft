// Common JavaScript Functionality
document.addEventListener("DOMContentLoaded", function() {
    console.log("Document is fully loaded and parsed.");

    // Function to highlight the active navigation link
    function highlightActiveNav() {
        const navLinks = document.querySelectorAll('header nav ul li a');
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';

        navLinks.forEach(link => {
            const isCurrentPage = link.getAttribute('href') === currentPath;
            link.classList.toggle('active', isCurrentPage);
            if (isCurrentPage) {
                link.setAttribute('aria-current', 'page');
            } else {
                link.removeAttribute('aria-current');
            }
        });
    } 

    
    highlightActiveNav();

    // Example of a common utility function
    function logUserActivity(activity) {
        console.log(`User Activity: ${activity} at ${new Date().toLocaleString()}`);
    }

    // Example usage:
    // logUserActivity("Page viewed: " + document.title);

    // You can add more global JavaScript functions here that might be used across multiple pages.
});
