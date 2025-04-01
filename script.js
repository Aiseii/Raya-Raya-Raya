function showQRCode() {
    document.getElementById("qr-container").style.display = "block";
    triggerFireworks();
}

// Fireworks Effect
function triggerFireworks() {
    const fireworksContainer = document.querySelector('.fireworks');
    for (let i = 0; i < 10; i++) {
        let firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = `${Math.random() * 100}%`;
        firework.style.animationDuration = `${Math.random() * 2 + 1}s`;
        fireworksContainer.appendChild(firework);

        setTimeout(() => {
            firework.remove();
        }, 3000);
    }
}

// Play Background Music
function playMusic() {
    document.getElementById("bg-music").play();
}
});
