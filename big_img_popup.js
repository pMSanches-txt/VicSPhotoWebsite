document.addEventListener('DOMContentLoaded', () => {
    // --- Lightbox Functionality ---

    const lightboxTriggers = document.querySelectorAll('.lightbox-trigger');
    const lightboxContainer = document.getElementById('lightbox-container');
    const lightboxImage = document.getElementById('lightbox-img');
    const lightboxCloseButton = lightboxContainer.querySelector('.lightbox-close');

    // Check if lightbox elements exist
    if (!lightboxContainer || !lightboxImage || !lightboxCloseButton) {
        console.warn("Lightbox elements not found. Lightbox functionality disabled.");
        return; // Exit if lightbox structure isn't present
    }

    

    if (lightboxTriggers.length > 0) {
        lightboxTriggers.forEach(trigger => {
            trigger.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent link from navigating directly

                // Get the URL of the large image from the link's href
                const largeImageUrl = trigger.getAttribute('href');

                // Set the src of the lightbox image
                lightboxImage.setAttribute('src', largeImageUrl);

                // Show the lightbox
                lightboxContainer.classList.add('active');

                // Optional: Prevent body scrolling
                document.body.classList.add('lightbox-open');
            });
        });
    }

    // Function to close the lightbox
    const closeLightbox = () => {
        lightboxContainer.classList.remove('active');
        lightboxImage.setAttribute('src', ''); // Clear the image src
        document.body.classList.remove('lightbox-open'); // Re-enable body scroll
    };

    // Close lightbox when the close button is clicked
    lightboxCloseButton.addEventListener('click', closeLightbox);

    // Close lightbox when clicking on the background overlay (outside the image)
    lightboxContainer.addEventListener('click', (event) => {
        // Check if the click was directly on the container itself, not the image
        if (event.target === lightboxContainer) {
            closeLightbox();
        }
    });

    // Optional: Close lightbox with the Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && lightboxContainer.classList.contains('active')) {
            closeLightbox();
        }
    });

    // --- End Lightbox Functionality ---


    // --- Your other existing JS (Hamburger Menu, Swiper, etc.) ---
    // const hamburgerButton = document.querySelector('.hamburger-button');
    // ... rest of your hamburger menu code ...

    // const carousels = document.querySelectorAll('.swiper.details-carousel');
    // ... rest of your swiper initialization code ...

}); // End DOMContentLoaded