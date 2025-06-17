document.addEventListener('DOMContentLoaded', () => { 

    
    const hamburgerButton = document.querySelector('.hamburger-button');
    const navList = document.querySelector('.nav-list'); // Or select by ID: #primary-navigation

    if (hamburgerButton && navList) { // Check if elements exist
        hamburgerButton.addEventListener('click', () => {
            // Toggle the nav-open class on the nav list
            navList.classList.toggle('nav-open');

            // Toggle the aria-expanded attribute on the button
            const isExpanded = hamburgerButton.getAttribute('aria-expanded') === 'true';
            hamburgerButton.setAttribute('aria-expanded', !isExpanded); // Set to the opposite boolean value

            // Optional: Toggle class on button for 'X' state if CSS targets button class
            // hamburgerButton.classList.toggle('is-active');

            // Optional: Prevent body scrolling when menu is open
            // document.body.classList.toggle('no-scroll'); // You'd need CSS for .no-scroll { overflow: hidden; }
        });
    } else {
        console.error("Hamburger button or navigation list not found!");
    }

});