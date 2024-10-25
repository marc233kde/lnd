// Manejo del botón
document.getElementById('miBoton').addEventListener('click', function() {
    alert('¡Hola! Has hecho clic en el botón.');
});

// Manejo del formulario
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulario enviado. Nos pondremos en contacto contigo pronto.');
});

// Configuración del carrusel
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Controladores de eventos para los botones del carrusel
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

// Mostrar la primera diapositiva
showSlide(currentSlide);
