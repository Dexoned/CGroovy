document.querySelectorAll('.card').forEach(card => {
    let timeout;
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const px = Math.abs(Math.floor(100 / rect.width * x) - 100);
        const py = Math.abs(Math.floor(100 / rect.height * y) - 100);
        const pa = (50 - px) + (50 - py);
        const lp = 50 + (px - 50) / 1.5;
        const tp = 50 + (py - 50) / 1.5;
        const ty = ((tp - 50) / 2) * -1;
        const tx = ((lp - 50) / 1.5) * .5;
        card.style.transform = `rotateX(${ty}deg) rotateY(${tx}deg)`;
        card.classList.add('active');
        clearTimeout(timeout);
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.classList.remove('active');
    });
});