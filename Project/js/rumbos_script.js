const imageDisplay = document.getElementById('contentDisplay');
const blocks = document.querySelectorAll('.contentArticle');

const observerOptions = {
    root: document.getElementById(".contentArticle"),
    threshold: 0.6
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const newSrc = entry.target.getAttribute('data-image');
            const fadeOut = imageDisplay.animate([{ opacity: 1 }, { opacity: 0 }], {
                duration: 1500, 
                easing: 'ease-in-out',
                fill: 'forwards'
            });

            fadeOut.finished.then(() => {
                imageDisplay.src = newSrc;
                imageDisplay.animate([{ opacity: 0 }, { opacity: 1 }], {
                    duration: 1500,
                    easing: 'ease-in-out',
                    fill: 'forwards'
                });
            });
        }
    });

}, observerOptions);

blocks.forEach(block => observer.observe(block));