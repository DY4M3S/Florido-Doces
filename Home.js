const images = [
    './ovos modelo 1.webp',
    '.natal.webp',
    './dia dos namorados.jpeg',
    './dia das maes.jpeg',
    './trufa maracuja.webp',
    './ovos modelo 2.jpeg',
    './natal 2.jpeg'
];

let currentIndex = 0;

function showImage(index) {
    const slides = document.querySelectorAll('.swiper-slide');
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}


function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

showImage(currentIndex);

document.addEventListener('DOMContentLoaded', function () {
    const coordenadasMaringa = [-23.4205, -51.9332]; 
    const coordenadasPaicandu = [-23.4578, -52.0485]; 
    const coordenadasSarandi = [-23.4444, -51.8732]; 

    const mapa = L.map('map').setView(coordenadasMaringa, 11); 

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapa);

    L.marker(coordenadasMaringa).addTo(mapa)
        .openPopup();

    L.marker(coordenadasPaicandu).addTo(mapa)
        .openPopup();

    L.marker(coordenadasSarandi).addTo(mapa)
        .openPopup();
});

function scrollToSection(sectionClass) {
    const section = document.querySelector('.' + sectionClass);
    const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
    const offset = window.innerHeight / 2 - section.clientHeight / 2;
    const scrollTo = sectionTop - offset;

    window.scrollTo({ top: scrollTo, behavior: 'smooth' });
}