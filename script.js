// Preloader
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => { loader.classList.add('loader-hidden'); }, 1500);
});

// Initialize AOS
AOS.init({ duration: 1000, once: true });

// Cursor Glow
const glow = document.getElementById('glow');
window.addEventListener('mousemove', (e) => { 
    glow.style.left = e.clientX + 'px'; 
    glow.style.top = e.clientY + 'px'; 
});

// WhatsApp Popup
setTimeout(() => { 
    const waPopup = document.getElementById('waPopup');
    if (waPopup) waPopup.classList.add('show'); 
}, 4000);

// Stat Counter Animation
function animateCount(id, target) {
    let current = 0;
    const element = document.getElementById(id);
    if (!element) return;
    const interval = setInterval(() => {
        if (current >= target) { 
            clearInterval(interval); 
            element.innerText = target + "+"; 
        } else { 
            current++; 
            element.innerText = current; 
        }
    }, 50);
}

// Scroll Handling
let started = false;
window.onscroll = function() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    const progress = document.getElementById("scroll-progress");
    if (progress) progress.style.width = scrolled + "%";
    
    if (winScroll > 600) {
        const phpBar = document.getElementById('php-bar');
        const wpBar = document.getElementById('wp-bar');
        if (phpBar) phpBar.style.width = "85%";
        if (wpBar) wpBar.style.width = "95%";
        
        if (!started) { 
            animateCount('count1', 50); 
            animateCount('count2', 3); 
            started = true; 
        }
    }
};
