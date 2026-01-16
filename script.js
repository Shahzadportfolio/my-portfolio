// Preloader Logic
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('loader-hidden');
    }, 2000);
});

// Initialize Animations
AOS.init({ duration: 1000, once: true });

// Mouse Glow Effect
const glow = document.getElementById('glow');
window.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});

// WhatsApp Popup
setTimeout(() => {
    const popup = document.getElementById('waPopup');
    if(popup) popup.classList.add('show');
}, 3000);

// Scroll Stats Animation
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

let started = false;
window.onscroll = function() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("scroll-progress").style.width = scrolled + "%";
    
    if (winScroll > 600) {
        const phpBar = document.getElementById('php-bar');
        const wpBar = document.getElementById('wp-bar');
        if(phpBar) phpBar.style.width = "85%";
        if(wpBar) wpBar.style.width = "95%";
        
        if(!started) {
            animateCount('count1', 50);
            animateCount('count2', 3);
            started = true;
        }
    }
};