"use strict";

// Punto de entrada
document.addEventListener("DOMContentLoaded", () => {
  // JS listo para usar
});



// ============================================
// HEADER PREMIUM - Funcionalidad Hamburguesa y Scroll
// ============================================

// Elementos del DOM
const navToggle = document.getElementById('navToggle');
const primaryNav = document.getElementById('primaryNav');
const navLinks = document.querySelectorAll('.nav-menu a');

// Función para cerrar el menú mobile
function closeMobileMenu() {
    if (primaryNav && primaryNav.classList.contains('active')) {
        primaryNav.classList.remove('active');
        if (navToggle) {
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.setAttribute('aria-label', 'Abrir menú');
        }
        // Prevenir scroll del body cuando el menú se cierra
        document.body.style.overflow = '';
    }
}

// Función para abrir el menú mobile
function openMobileMenu() {
    if (primaryNav) {
        primaryNav.classList.add('active');
        if (navToggle) {
            navToggle.setAttribute('aria-expanded', 'true');
            navToggle.setAttribute('aria-label', 'Cerrar menú');
        }
        // Bloquear scroll del body cuando el menú está abierto
        document.body.style.overflow = 'hidden';
    }
}

// Toggle del menú hamburguesa
if (navToggle && primaryNav) {
    navToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        if (isExpanded) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });
}

// Cerrar menú al hacer click en un enlace
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Si el menú está visible en mobile, lo cerramos
        if (window.innerWidth <= 767 && primaryNav && primaryNav.classList.contains('active')) {
            closeMobileMenu();
        }
    });
});

// Resetear menú al redimensionar la pantalla (de mobile a desktop)
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        if (window.innerWidth > 767) {
            // Si estamos en desktop, aseguramos que el menú esté visible y sin clases mobile
            if (primaryNav) {
                primaryNav.classList.remove('active');
                document.body.style.overflow = '';
            }
            if (navToggle) {
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.setAttribute('aria-label', 'Abrir menú');
            }
        }
    }, 100);
});

// Efecto de scroll: agregar clase 'scrolled' al header cuando se hace scroll
const headerElement = document.querySelector('header');
if (headerElement) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            headerElement.classList.add('scrolled');
        } else {
            headerElement.classList.remove('scrolled');
        }
    });
}

// Prevenir cierres accidentales si se hace click dentro del menú en mobile (evita propagación)
if (primaryNav) {
    primaryNav.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

// Cerrar menú si se hace click fuera de él (opcional, pero mejora UX)
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 767 && primaryNav && primaryNav.classList.contains('active')) {
        // Si el click NO es sobre el botón hamburguesa ni dentro del menú
        if (!navToggle?.contains(e.target) && !primaryNav.contains(e.target)) {
            closeMobileMenu();
        }
    }
});

