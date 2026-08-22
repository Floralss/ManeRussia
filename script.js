// Mobile menu
const burger = document.getElementById('burger');
const mobileNav = document.getElementById('mobileNav');

if (burger && mobileNav) {
  burger.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
    burger.classList.toggle('active');
  });

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
    });
  });
}

// Particles in hero
const particlesContainer = document.getElementById('particles');
if (particlesContainer) {
  for (let i = 0; i < 40; i++) {
    const p = document.createElement('div');
    p.style.cssText = `
      position: absolute;
      width: ${2 + Math.random() * 3}px;
      height: ${2 + Math.random() * 3}px;
      background: rgba(230, 57, 43, ${0.2 + Math.random() * 0.4});
      border-radius: 50%;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: float ${8 + Math.random() * 12}s ease-in-out infinite;
      animation-delay: ${-Math.random() * 10}s;
    `;
    particlesContainer.appendChild(p);
  }

  const style = document.createElement('style');
  style.textContent = `
    @keyframes float {
      0%, 100% { transform: translate(0, 0); opacity: 0.3; }
      25% { transform: translate(20px, -30px); opacity: 0.7; }
      50% { transform: translate(-15px, -50px); opacity: 0.4; }
      75% { transform: translate(25px, -20px); opacity: 0.6; }
    }
  `;
  document.head.appendChild(style);
}

// Download buttons
const toast = document.getElementById('toast');
const toastText = document.getElementById('toastText');

function showToast(message) {
  if (!toast || !toastText) return;
  toastText.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3200);
}

document.querySelectorAll('.download-link').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const platform = btn.dataset.platform || 'windows';
    const names = {
      windows: 'BlandRussia_Launcher_v2.4.1.exe',
      android: 'BlandRussia_v2.4.1.apk'
    };
    showToast(`Скачивание: ${names[platform] || 'лаунчер'}...`);
    // Здесь можно подставить реальную ссылку на файл
    // window.location.href = `/downloads/${names[platform]}`;
  });
});

const downloadBtn = document.getElementById('downloadBtn');
if (downloadBtn) {
  downloadBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
  });
}

// Smooth header on scroll
let lastScroll = 0;
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (header) {
    header.style.background = y > 50
      ? 'rgba(10, 10, 12, 0.92)'
      : 'rgba(10, 10, 12, 0.75)';
  }
  lastScroll = y;
});
