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
