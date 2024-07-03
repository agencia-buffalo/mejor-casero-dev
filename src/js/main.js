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
        // + & -
        const iconOpen = this.querySelector('.iconOpen');
        const iconClose = this.querySelector('.iconClose');
        // Mostrar ocultar class open
        content.classList.toggle('open');
        // Ajustar altura
        if (content.classList.contains('open')) {
            content.style.maxHeight = content.scrollHeight + 'px';
            iconOpen.classList.add('hidden');
            iconClose.classList.remove('hidden');
        } else {
            content.style.maxHeight = '0';
            iconOpen.classList.remove('hidden');
            iconClose.classList.add('hidden');
        }
    });
});

// Btn flotante whatsapp
const iconWapp = `
    <svg fill="#fff" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="45px" height="45px" viewBox="0 0 30.667 30.667" xml:space="preserve">
        <g><path d="M30.667,14.939c0,8.25-6.74,14.938-15.056,14.938c-2.639,0-5.118-0.675-7.276-1.857L0,30.667l2.717-8.017
		c-1.37-2.25-2.159-4.892-2.159-7.712C0.559,6.688,7.297,0,15.613,0C23.928,0.002,30.667,6.689,30.667,14.939z M15.61,2.382
		c-6.979,0-12.656,5.634-12.656,12.56c0,2.748,0.896,5.292,2.411,7.362l-1.58,4.663l4.862-1.545c2,1.312,4.393,2.076,6.963,2.076
		c6.979,0,12.658-5.633,12.658-12.559C28.27,8.016,22.59,2.382,15.61,2.382z M23.214,18.38c-0.094-0.151-0.34-0.243-0.708-0.427
		c-0.367-0.184-2.184-1.069-2.521-1.189c-0.34-0.123-0.586-0.185-0.832,0.182c-0.243,0.367-0.951,1.191-1.168,1.437
		c-0.215,0.245-0.43,0.276-0.799,0.095c-0.369-0.186-1.559-0.57-2.969-1.817c-1.097-0.972-1.838-2.169-2.052-2.536
		c-0.217-0.366-0.022-0.564,0.161-0.746c0.165-0.165,0.369-0.428,0.554-0.643c0.185-0.213,0.246-0.364,0.369-0.609
		c0.121-0.245,0.06-0.458-0.031-0.643c-0.092-0.184-0.829-1.984-1.138-2.717c-0.307-0.732-0.614-0.611-0.83-0.611
		c-0.215,0-0.461-0.03-0.707-0.03S9.897,8.215,9.56,8.582s-1.291,1.252-1.291,3.054c0,1.804,1.321,3.543,1.506,3.787
		c0.186,0.243,2.554,4.062,6.305,5.528c3.753,1.465,3.753,0.976,4.429,0.914c0.678-0.062,2.184-0.885,2.49-1.739
		C23.307,19.268,23.307,18.533,23.214,18.38z"/></g>
    </svg>
`;

document.addEventListener('DOMContentLoaded', function() {
    // Crea contenedor btn flotante
    const floatButton = document.createElement('div');
    floatButton.innerHTML = iconWapp;
    floatButton.style.position = 'fixed';
    floatButton.style.bottom = '20px';
    floatButton.style.right = '20px';
    floatButton.style.width = '70px';
    floatButton.style.height = '70px';
    floatButton.style.backgroundColor = '#24d366';
    floatButton.style.borderRadius = '50%';
    floatButton.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
    floatButton.style.display = 'flex';
    floatButton.style.alignItems = 'center';
    floatButton.style.justifyContent = 'center';
    floatButton.style.cursor = 'pointer';
    floatButton.style.zIndex = '1000';
    // Agrega btn
    document.body.appendChild(floatButton);
    // URL clic btn
    floatButton.addEventListener('click', function() {
        window.location.href = 'https://www.google.com/';
    });
});
