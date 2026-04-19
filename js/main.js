// === JEAN-PLUME - JavaScript Principal ===

// Menu burger pour mobile
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
        
        // Fermer le menu lors du clic sur un lien
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                nav.classList.remove('active');
            });
        });
    }
    
    // Carrousel
    initCarrousel();
    
    // Smooth scroll pour les ancres
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Carrousel d'images
function initCarrousel() {
    const carrousel = document.querySelector('.carrousel-track');
    if (!carrousel) return;
    
    const slides = document.querySelectorAll('.carrousel-slide');
    const prevBtn = document.querySelector('.carrousel-btn.prev');
    const nextBtn = document.querySelector('.carrousel-btn.next');
    const indicators = document.querySelectorAll('.indicator');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    function updateCarrousel() {
        carrousel.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Mise à jour des indicateurs
        indicators.forEach((indicator, index) => {
            if (index === currentSlide) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarrousel();
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarrousel();
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }
    
    // Indicateurs cliquables
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            updateCarrousel();
        });
    });
    
    // Auto-défilement
    setInterval(nextSlide, 5000);
    
    // Support touch pour mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    carrousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    carrousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            nextSlide();
        }
        if (touchEndX > touchStartX + 50) {
            prevSlide();
        }
    }
}

// Animation de scroll
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.fade-in-scroll');
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
            element.classList.add('visible');
        }
    });
});

// Gestion du formulaire de contact
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;
        
        // Validation simple
        if (name && email && message) {
            // Ouvrir le client email
            const subject = encodeURIComponent(`Message de ${name}`);
            const body = encodeURIComponent(`De: ${name}\nEmail: ${email}\n\n${message}`);
            window.location.href = `mailto:jeanplume.musique@gmail.com?subject=${subject}&body=${body}`;
            
            // Réinitialiser le formulaire
            contactForm.reset();
            
            // Message de confirmation
            alert('Merci ! Votre message va être envoyé.');
        } else {
            alert('Veuillez remplir tous les champs.');
        }
    });
}

// === NOUVELLES ANIMATIONS ESTHÉTIQUES ===

// Initialisation des animations supplémentaires
document.addEventListener('DOMContentLoaded', function() {
    initCustomCursor();
    initParallax();
    initScrollReveal();
    initSplitText();
});

// 1. Curseur Personnalisé
function initCustomCursor() {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    
    if (!cursor || !follower) return;

    // Désactiver sur mobile tactile
    if(window.matchMedia("(pointer: coarse)").matches) {
        cursor.style.display = 'none';
        follower.style.display = 'none';
        return;
    }

    let posX = 0, posY = 0;
    let mouseX = 0, mouseY = 0;

    // Animation fluide du follower
    setInterval(function() {
        posX += (mouseX - posX) / 6;
        posY += (mouseY - posY) / 6;
        follower.style.left = posX + 'px';
        follower.style.top = posY + 'px';
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    }, 16);

    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Effet sur les liens et boutons
    const links = document.querySelectorAll('a, button, .offre-btn');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
            follower.classList.add('active');
        });
        link.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
            follower.classList.remove('active');
        });
    });
}

// 2. Parallax
function initParallax() {
    const heroImg = document.querySelector('.hero img');
    if (!heroImg) return;
    
    window.addEventListener('scroll', () => {
        let scrollValue = window.scrollY;
        // Limiter le translateY pour éviter que l'image ne sorte du cadre si elle est de taille fixe
        heroImg.style.transform = `translateY(${scrollValue * 0.4}px)`;
    });
}

// 3. Scroll Reveal (Intersection Observer)
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
}

// 4. Split Text Effect (Dancing Letters)
function initSplitText() {
    const h1 = document.querySelector('.hero h1');
    if (!h1) return;
    
    const text = h1.textContent;
    h1.textContent = '';
    
    for(let i = 0; i < text.length; i++) {
        let span = document.createElement('span');
        span.textContent = text[i] === ' ' ? '\u00A0' : text[i];
        span.style.animationDelay = `${i * 0.1}s`;
        span.className = 'dancing-letter';
        h1.appendChild(span);
    }
}

