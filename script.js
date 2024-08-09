document.addEventListener('click', function(e) {
    for (let i = 0; i < 20; i++) {
        createParticle(e.clientX, e.clientY);
    }
});

function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    document.body.appendChild(particle);

    const size = Math.random() * 10 + 5;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    const offsetX = (Math.random() - 0.5) * 200;
    const offsetY = (Math.random() - 0.5) * 200;

    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;

    particle.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(1)`;
    particle.style.opacity = 1;

    setTimeout(() => {
        particle.remove();
    }, 1000); // Adjusted duration to match animation
}

function createStars() {
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        document.body.appendChild(star);

        const size = Math.random() * 8;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        const x = Math.random() * window.innerWidth;
        const y = Math.random() * -window.innerHeight;

        star.style.left = `${x}px`;
        star.style.top = `${y}px`;

        const duration = Math.random() * 10 + 5;
        star.style.animationDuration = `${duration}s`;
    }
}

function openWebsite() {
    window.open('https://cdn.discordapp.com/attachments/1120969252334207108/1271499874424193044/message.txt?ex=66b79009&is=66b63e89&hm=9f44542c105688ff612c132398784f3ce89a08d567297e20156d782dcfa8f625&', '_blank'); // Replace with your desired URL
}

createStars();
