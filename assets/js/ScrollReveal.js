window.sr = ScrollReveal({ reset: true });

sr.reveal('.about', { 
    origin: 'left',
    distance: '50px',
    duration: 900,
    reset: false
});

sr.reveal('.skils', { 
    origin: 'left',
    distance: '50px',
    duration: 900,
    delay: 900,
    reset: false
});

sr.reveal('.projets', { 
    origin: 'left',
    distance: '50px',
    duration: 1100,
    reset: false
});

sr.reveal('.contact', { 
    origin: 'left',
    distance: '50px',
    duration: 1100,
    reset: false
});

window.addEventListener('resize', () => {
    sr.reveal('.about', { 
        origin: 'left',
        distance: '50px',
        duration: 900,
        reset: false
    });
    
    sr.reveal('.skils', { 
        origin: 'left',
        distance: '50px',
        duration: 900,
        delay: 900,
        reset: false
    });
    
    sr.reveal('.projets', { 
        origin: 'left',
        distance: '50px',
        duration: 1100,
        reset: false
    });
    
    sr.reveal('.contact', { 
        origin: 'left',
        distance: '50px',
        duration: 1100,
        reset: false
    });
})