// Common JavaScript Functionality
document.addEventListener("DOMContentLoaded", function() {
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
});
