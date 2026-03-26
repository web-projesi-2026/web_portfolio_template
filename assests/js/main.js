/* External script - scripts are also inline in each HTML for standalone viewing */
/* This file exists to maintain the teacher's required file structure */

// Scroll progress bar
window.addEventListener('scroll', () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    const bar = document.getElementById('scrollProgress');
    if (bar) bar.style.width = (window.scrollY / h * 100) + '%';
    const btn = document.getElementById('backToTop');
    if (btn) btn.classList.toggle('visible', window.scrollY > 400);
});

// Scroll reveal
const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') });
}, { threshold: 0.05 });
document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));
