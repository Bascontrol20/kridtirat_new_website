document.addEventListener('DOMContentLoaded', function () {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            // Toggle active class on the header
            header.classList.toggle('active');

            // Get the content panel
            const accordionContent = header.nextElementSibling;

            // Toggle the content display
            if (accordionContent.style.maxHeight) {
                // If it's open, close it
                accordionContent.style.maxHeight = null;
            } else {
                // If it's closed, open it to its full scroll height
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            }
        });
    });
});
