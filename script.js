// Common JavaScript Functionality
document.addEventListener("DOMContentLoaded", function() {
    console.log("Document is fully loaded and parsed.");

    // Function to highlight the active navigation link
    function highlightActiveNav() {
        const navLinks = document.querySelectorAll('header nav ul li a');
        const currentPath = window.location.pathname.split('/').pop(); // Get current file name

        navLinks.forEach(link => {
            // Remove 'active' class from all links first
            link.classList.remove('active');

            // Add 'active' class if href matches current page or is index.html for root
            if (link.getAttribute('href') === currentPath || (currentPath === '' && link.getAttribute('href') === 'index.html')) {
                link.classList.add('active');
                console.log(`Active link set for: ${link.textContent}`);
            }
        });
    }

    // Call the function on page load
    highlightActiveNav();

    // Example of a common utility function
    function logUserActivity(activity) {
        console.log(`User Activity: ${activity} at ${new Date().toLocaleString()}`);
    }

    // Example usage:
    // logUserActivity("Page viewed: " + document.title);

    // You can add more global JavaScript functions here that might be used across multiple pages.
});
