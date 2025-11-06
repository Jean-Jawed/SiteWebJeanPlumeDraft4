// === JEAN-PLUME - Animations ===

// Animation de la landing page
if (document.body.classList.contains('landing-page')) {
    initLandingAnimation();
}

// Animation de la page À propos
if (document.body.classList.contains('apropos-page')) {
    initAproposAnimation();
}

function initLandingAnimation() {
    const landing = document.querySelector('.landing-wrapper');
    if (!landing) return;
    
    // Créer les éléments musicaux animés
    const musicElements = ['♪', '♫', '♬', '♩', '♭', '♮', '♯', '🎵', '🎶'];
    const numElements = 30;
    
    for (let i = 0; i < numElements; i++) {
        const element = document.createElement('div');
        element.className = 'music-note';
        element.textContent = musicElements[Math.floor(Math.random() * musicElements.length)];
        
        // Position aléatoire
        element.style.left = `${Math.random() * 100}%`;
        element.style.top = `${Math.random() * 100}%`;
        
        // Taille aléatoire
        const size = 20 + Math.random() * 30;
        element.style.fontSize = `${size}px`;
        
        // Vitesse d'animation aléatoire
        element.style.animationDuration = `${3 + Math.random() * 4}s`;
        element.style.animationDelay = `${Math.random() * 2}s`;
        
        landing.appendChild(element);
    }
    
    // Interaction avec la souris
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateNotes() {
        const notes = document.querySelectorAll('.music-note');
        
        notes.forEach(note => {
            const rect = note.getBoundingClientRect();
            const noteX = rect.left + rect.width / 2;
            const noteY = rect.top + rect.height / 2;
            
            const deltaX = mouseX - noteX;
            const deltaY = mouseY - noteY;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            
            if (distance < 150) {
                const force = (150 - distance) / 150;
                const moveX = (deltaX / distance) * force * 30;
                const moveY = (deltaY / distance) * force * 30;
                
                note.style.transform = `translate(${moveX}px, ${moveY}px)`;
            } else {
                note.style.transform = 'translate(0, 0)';
            }
        });
        
        requestAnimationFrame(animateNotes);
    }
    
    animateNotes();
    
    // Clic pour passer à l'accueil
    landing.addEventListener('click', function() {
        landing.style.opacity = '0';
        landing.style.transition = 'opacity 1s ease';
        
        setTimeout(() => {
            window.location.href = 'accueil.html';
        }, 1000);
    });
}

function initAproposAnimation() {
    const canvas = document.getElementById('notes-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Adapter la taille du canvas
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Classe pour les notes de musique
    class Note {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.radius = 8 + Math.random() * 8;
            this.color = '#87CEEB';
            this.connections = [];
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            // Rebond sur les bords
            if (this.x < 0 || this.x > canvas.width) {
                this.vx *= -1;
            }
            if (this.y < 0 || this.y > canvas.height) {
                this.vy *= -1;
            }
            
            // Garder dans les limites
            this.x = Math.max(0, Math.min(canvas.width, this.x));
            this.y = Math.max(0, Math.min(canvas.height, this.y));
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.strokeStyle = '#333';
            ctx.lineWidth = 2;
            ctx.stroke();
        }
    }
    
    // Créer les notes
    const notes = [];
    const numNotes = 40;
    
    for (let i = 0; i < numNotes; i++) {
        notes.push(new Note());
    }
    
    // Dessiner les connexions
    function drawConnections() {
        const maxDistance = 150;
        
        ctx.strokeStyle = 'rgba(135, 206, 235, 0.3)';
        ctx.lineWidth = 1;
        
        for (let i = 0; i < notes.length; i++) {
            for (let j = i + 1; j < notes.length; j++) {
                const dx = notes[i].x - notes[j].x;
                const dy = notes[i].y - notes[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < maxDistance) {
                    ctx.beginPath();
                    ctx.moveTo(notes[i].x, notes[i].y);
                    ctx.lineTo(notes[j].x, notes[j].y);
                    ctx.globalAlpha = 1 - distance / maxDistance;
                    ctx.stroke();
                    ctx.globalAlpha = 1;
                }
            }
        }
    }
    
    // Animation principale
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        drawConnections();
        
        notes.forEach(note => {
            note.update();
            note.draw();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// Animation au scroll (éléments qui apparaissent)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.fade-in-scroll');
    animatedElements.forEach(el => observer.observe(el));
});

// Animation des cartes concerts au scroll
if (document.body.classList.contains('concerts-page')) {
    const concertCards = document.querySelectorAll('.concert-card');
    
    const concertObserver = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });
    
    concertCards.forEach(card => concertObserver.observe(card));
}
