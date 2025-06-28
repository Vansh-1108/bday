function playSurprise() {
  document.getElementById("surprise").classList.remove("hidden");
  document.getElementById("song").play();
  launchConfetti();
}

function launchConfetti() {
  const duration = 4 * 1000;
  const end = Date.now() + duration;
  const def = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
  const rand = (min, max) => Math.random() * (max - min) + min;

  const iv = setInterval(() => {
    const timeLeft = end - Date.now();
    if (timeLeft <= 0) return clearInterval(iv);

    const count = 50 * (timeLeft / duration);
    confetti({ ...def, particleCount: count, origin: { x: rand(0.1,0.3), y: rand(-0.2,0.2) } });
    confetti({ ...def, particleCount: count, origin: { x: rand(0.7,0.9), y: rand(-0.2,0.2) } });
  }, 250);
}
function createFloatingElement(type) {
  const container = document.getElementById('floating-bg');
  const elem = document.createElement('div');
  elem.classList.add(type);

  // Random horizontal position
  elem.style.left = Math.random() * 100 + 'vw';

  // Random animation duration between 5s and 10s
  elem.style.animationDuration = (5 + Math.random() * 5) + 's';

  // Random animation delay so they don't float in sync
  elem.style.animationDelay = (Math.random() * 5) + 's';

  container.appendChild(elem);

  // Remove element after animation to keep DOM clean
  setTimeout(() => {
    container.removeChild(elem);
  }, 10000);
}

// Create stars and hearts continuously
setInterval(() => createFloatingElement('floating-star'), 400);
setInterval(() => createFloatingElement('floating-heart'), 700);
