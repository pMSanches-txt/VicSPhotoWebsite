document.addEventListener('DOMContentLoaded', () => { // Use DOMContentLoaded

    const btns = document.querySelectorAll('.ptf-btn');
    const galleries = document.querySelectorAll('.gallery');

    const closeBtn = document.querySelectorAll('.close-btn');

    const widget = document.querySelector('.elfsight-app-9570e38a-eafe-4522-aef4-432acbeca144');

    btns.forEach(button => {
        button.addEventListener('click', () => {
            const target_gallery_id = button.dataset.galleryTarget; // e.g., "gallery-weddings"
            const target_gallery = document.getElementById(target_gallery_id);

            galleries.forEach(gallery => {
                gallery.classList.remove('active'); // Remove the class that makes it visible
            });

            btns.forEach(btn => {
                btn.classList.remove('active'); // Remove active style from all buttons
            });

            if (target_gallery) {
                target_gallery.classList.add('active'); // Add class to make it visible
                target_gallery.scrollIntoView({ behavior: 'smooth', block: 'start' });
                
             } else {
                console.error(`Could not find gallery with ID: ${target_gallery_id}`);
             } 

             button.classList.add('active');

             widget.classList.add('closed'); 
        });
    });

    closeBtn.forEach(button => {
        button.addEventListener('click', () => {
            galleries.forEach(gallery => {
                gallery.classList.remove('active');
            });
    
            btns.forEach(btn => {
                btn.classList.remove('active');
            });
            
            widget.classList.remove('closed'); 

            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
    
    

});
