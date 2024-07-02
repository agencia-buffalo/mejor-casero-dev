const btnMenuMobileOpen = document.getElementById('btnMenuMobileOpen');
const menuMobile = document.getElementById('menuMobile');
const navBarMobile = document.querySelectorAll('#logo, .iconMenuMobile');
const iconsOpenClose = document.querySelectorAll('.iconOpen, .iconClose');

const introSlide1 = document.querySelector('#introSlide1');
const introSlide2 = document.querySelector('#introSlide2');
const introDots = document.querySelectorAll('#introDot1, #introDot2');

const accordionHeaders = document.querySelectorAll('.accordionHeader');

// Menu mobile open/close
btnMenuMobileOpen.addEventListener('click', function() {
    menuMobile.classList.toggle('hidden');
    navBarMobile.forEach(element => {
        element.classList.toggle('fixed');
    });
    iconsOpenClose.forEach(element => {
        element.classList.toggle('hidden');
    });
});

// Counter
function animateCount(element, start, end, duration) {
    var startTime = null;
    function updateCounter(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = timestamp - startTime;
        var percentage = Math.min(progress / duration, 1);
        var value = start + percentage * (end - start);
        element.innerHTML = value.toFixed(0); // decimales
        if (percentage < 1) {
            requestAnimationFrame(updateCounter);
        }
    }
    requestAnimationFrame(updateCounter);
}
// Intersection Observer
function createObserver() {
    const elements = document.querySelectorAll('.counter');
    const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
        const endValue = parseInt(entry.target.textContent, 10);
        animateCount(entry.target, 0, endValue, 2000);
        // Dejar de observar después de la animación
        // observer.unobserve(entry.target);
        }
    });
    }, { threshold: 0.1 }); // El umbral de visibilidad
    elements.forEach((element) => {
    observer.observe(element);
    });
}
// Llamar a la función createObserver al cargar la página
window.addEventListener('DOMContentLoaded', createObserver);

// Slide intro precios
introDots.forEach(dot => {
    dot.addEventListener('click', function() {
        if (dot.id === 'introDot1') {
            introSlide1.classList.add('block');
            introSlide1.classList.remove('hidden');
            introSlide2.classList.add('hidden');
            introSlide2.classList.remove('block');
        } else if (dot.id === 'introDot2') {
            introSlide1.classList.add('hidden');
            introSlide1.classList.remove('block');
            introSlide2.classList.add('block');
            introSlide2.classList.remove('hidden');
        }
        // Ajustar la opacidad de los dots
        introDots.forEach(d => d.style.opacity = '0.5'); // Inactivo
        dot.style.opacity = '1'; // Activo
    });
    // Inicializar la opacidad de los dots
    document.querySelector('#introDot1').classList.add('opacity-100');
    document.querySelector('#introDot2').classList.add('opacity-50');
});

// Accordion
accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
        const content = this.nextElementSibling;
        // Mostrar ocultar class open
        content.classList.toggle('open');
        // Ajustar altura
        if (content.classList.contains('open')) {
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = '0';
        }
    });
});
