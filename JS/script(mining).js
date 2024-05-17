let tokenCount = 0;

document.getElementById('mineButton').addEventListener('click', function() {
    const button = this;
    const particlesContainer = document.getElementById('particles-container');
    const tokenCounter = document.getElementById('tokenCounter');

    // Add shake effect
    button.classList.add('shake');
    setTimeout(() => {
        button.classList.remove('shake');
    }, 500);

    // Create particles
    for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        const x = (Math.random() - 0.5) * 200 + 'px';
        const y = (Math.random() - 0.5) * 200 + 'px';
        
        particle.style.setProperty('--x', x);
        particle.style.setProperty('--y', y);

        particlesContainer.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 1000);
    }

    // Increment token count and update the display
    tokenCount++;
    tokenCounter.textContent = `Tokens Collected: ${tokenCount}`;
});

