// Fungsi untuk scroll ke bagian tertentu
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Typed.js initialization for animated text
var typed = new Typed('.multiple-text', {
    strings: ["a Computer Science Student", "a IOT Designer.", "a Programmer."],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });