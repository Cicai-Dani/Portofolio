const items = document.querySelectorAll('.slider .quiz-card');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

let active = 2;
function loadShow() {
    let stt = 0;
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
    for (let i = active + 1; i < items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
    stt = 0;
    for (let i = active - 1; i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}
loadShow();
next.onclick = function () {
    active = active + 1 < items.length ? active + 1 : active;
    loadShow();
}
prev.onclick = function () {
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
}

function animaElement(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('start-animation');
        }
    });
}

if (window.matchMedia("(min-width: 600px)").matches) {
    let observer = new IntersectionObserver(animaElement, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 
    });

    document.querySelectorAll('.mktg-card-a .card-text, .mktg-card-b .card-text, .banner .banner-heading, .banner .info, .design-card .card-text').forEach((el) => {
        observer.observe(el);
    });
}

