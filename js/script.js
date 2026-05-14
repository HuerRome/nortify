"use strict";

// Punto de entrada
document.addEventListener("DOMContentLoaded", () => {
  // JS listo para usar
});


const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const headerActions = document.querySelector(".header-actions");
const navLinks = document.querySelectorAll(".site-nav__link");

if (navToggle && siteNav && headerActions) {
  const closeMobileMenu = () => {
    navToggle.classList.remove("is-open");
    siteNav.classList.remove("is-open");
    headerActions.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Abrir menú de navegación");
  };

  const openMobileMenu = () => {
    navToggle.classList.add("is-open");
    siteNav.classList.add("is-open");
    headerActions.classList.add("is-open");
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "Cerrar menú de navegación");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.classList.contains("is-open");
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 991) {
        closeMobileMenu();
      }
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 991) {
      closeMobileMenu();
    }
  });
}

























































// HERO BUTTON MICRO INTERACTION

const primaryButton = document.querySelector(".btn-primary");
const secondaryButton = document.querySelector(".btn-secondary");

primaryButton.addEventListener("mousemove", (e) => {
  const rect = primaryButton.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  primaryButton.style.background = `
    radial-gradient(circle at ${x}px ${y}px,
    rgba(255,255,255,0.18),
    transparent 35%),
    linear-gradient(135deg,#8f4eff 0%,#9f61ff 100%)
  `;
});

primaryButton.addEventListener("mouseleave", () => {
  primaryButton.style.background =
    "linear-gradient(135deg,#8f4eff 0%,#9f61ff 100%)";
});

secondaryButton.addEventListener("mousemove", (e) => {
  const rect = secondaryButton.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  secondaryButton.style.background = `
    radial-gradient(circle at ${x}px ${y}px,
    rgba(255,255,255,0.08),
    transparent 40%),
    rgba(18,18,18,0.95)
  `;
});

secondaryButton.addEventListener("mouseleave", () => {
  secondaryButton.style.background =
    "rgba(10,10,10,0.88)";
});