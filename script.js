// Preloader logic
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => { loader.classList.add('loader-hidden'); }, 1500);
});

// Animation Init
AOS.init({ duration: 1000, once: true });

// Cursor Glow Movement
const glow = document.getElementById('glow');
window.addEventListener('mousemove', (e) => { 
    glow.style.left = e.clientX + 'px'; 
    glow.style.top = e.clientY + 'px'; 
});

// WhatsApp Popup delay
setTimeout(() => { document.getElementById('waPopup').classList.add('show'); }, 4000);

// Counter Animation Logic
function animateCount(id, target) {
    let current = 0;
    const element = document.getElementById(id);
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
    document.getElementById("scroll-progress").style.width = scrolled + "%";
    
    // Skill bars and counters trigger
    if (winScroll > 600) {
        document.getElementById('php-bar').style.width = "85%";
        document.getElementById('wp-bar').style.width = "95%";
        if(!started) { 
            animateCount('count1', 50); 
            animateCount('count2', 3); 
            started = true; 
        }
    }
};
