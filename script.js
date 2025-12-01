let currentSlide = 0;
let carouselInterval; // Variável para controlar o intervalo do carrossel
const slides = document.querySelectorAll('.carousel-track .logo-card');
const totalSlides = slides.length;
const visibleSlides = 2; // Quantos slides visíveis de cada vez

// Função para duplicar os slides e criar o efeito infinito
function duplicateSlides() {
    const track = document.querySelector('.carousel-track');
    // Duplica o final para o começo
    for (let i = 0; i < visibleSlides; i++) {
        const clone = slides[totalSlides - 1 - i].cloneNode(true);
        track.prepend(clone);
    }
    // Duplica o começo para o final
    for (let i = 0; i < visibleSlides; i++) {
        const clone = slides[i].cloneNode(true);
        track.appendChild(clone);
    }
}

// Função para mostrar um slide específico
function showSlide(index, smoothTransition = true) {
    const track = document.querySelector('.carousel-track');
    const slideWidthPercentage = 100 / visibleSlides; // Largura de cada slide visível
    const initialOffset = -visibleSlides * slideWidthPercentage; // Offset inicial para o primeiro slide "real"

    let targetIndex = index;

    if (!smoothTransition) {
        track.style.transition = 'none'; // Desativa transição para "pulo" instantâneo
    } else {
        track.style.transition = 'transform 0.5s ease-in-out'; // Ativa transição normal
    }

    // Calcula a posição do transform
    track.style.transform = `translateX(${initialOffset - targetIndex * slideWidthPercentage}%)`;

    // Lógica para loop circular (quando o slide visível é um clone)
    if (index >= totalSlides) {
        // Se avançou além dos slides reais (chegou nos clones do final)
        setTimeout(() => showSlide(0, false), 500); // Pula para o começo sem transição
    } else if (index < 0) {
        // Se retrocedeu além dos slides reais (chegou nos clones do começo)
        setTimeout(() => showSlide(totalSlides - 1, false), 500); // Pula para o final sem transição
    }
    currentSlide = targetIndex;
}

// Função para mover o carrossel (usada nos botões e automaticamente)
function moveCarousel(step) {
    stopAutoSlide(); // Para o carrossel quando há interação manual
    showSlide(currentSlide + step);
    startAutoSlide(); // Reinicia o carrossel após interação
}

// Inicia o carrossel automático
function startAutoSlide() {
    stopAutoSlide(); // Limpa qualquer intervalo existente
    carouselInterval = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 4000); // A cada 4 segundos
}

// Para o carrossel automático
function stopAutoSlide() {
    clearInterval(carouselInterval);
}

// Inicializa o carrossel ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    // Duplica os slides para criar o loop infinito
    duplicateSlides();

    // Ajusta a largura dos slides para caberem no track
    slides.forEach(slide => {
        slide.style.flexBasis = (100 / visibleSlides) + '%';
        slide.style.maxWidth = (100 / visibleSlides) + '%'; // Garante que não exceda
    });

    // Ajusta a largura do track para acomodar os slides duplicados
    document.querySelector('.carousel-track').style.width = ((totalSlides + (visibleSlides * 2)) * (100 / visibleSlides)) + '%';

    // Inicia no primeiro slide real (após os clones do início)
    showSlide(0, false);
    startAutoSlide(); // Inicia o carrossel automático
});