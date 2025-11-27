import './navbar.js';

document.addEventListener('DOMContentLoaded', () => {
  // Enter Overlay & Audio
  const enterOverlay = document.getElementById('enter-overlay');
  const bgMusic = document.getElementById('bg-music');

  if (enterOverlay && bgMusic) {
    bgMusic.volume = 0.5;
    enterOverlay.addEventListener('click', () => {
      enterOverlay.classList.add('hidden');
      bgMusic.play().catch(e => console.log("Audio play failed:", e));
    });
  }

  // Copy IP Functionality
  const copyBtn = document.getElementById('copy-ip');
  const toast = document.getElementById('toast');
  const serverIP = 'in-02.scarycloud.store:25568';

  if (copyBtn && toast) {
    const apiUrl = `https://api.mcsrvstat.us/2/${serverIP}`;

    // Server Status Fetch
    const statusDot = document.querySelector('.status-dot');
    const statusText = document.querySelector('.status-text');

    if (statusDot && statusText) {
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          if (data.online) {
            statusDot.classList.add('online');
            statusText.textContent = `EN LIGNE - ${data.players.online} JOUEURS`;
            statusText.style.color = '#fff';
          } else {
            statusDot.classList.add('offline');
            statusText.textContent = 'HORS LIGNE';
            statusText.style.color = '#ff4444';
          }
        })
        .catch(err => {
          console.error('Status fetch failed:', err);
          statusText.textContent = 'STATUT INCONNU';
        });
    }

    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(serverIP).then(() => {
        toast.classList.remove('hidden');
        setTimeout(() => {
          toast.classList.add('hidden');
        }, 2000);
      }).catch(err => {
        console.error('Failed to copy text: ', err);
        const textArea = document.createElement("textarea");
        textArea.value = serverIP;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
          document.execCommand('copy');
          toast.classList.remove('hidden');
          setTimeout(() => toast.classList.add('hidden'), 2000);
        } catch (err) {
          console.error('Fallback: Oops, unable to copy', err);
        }
        document.body.removeChild(textArea);
      });
    });
  }

  // Scroll Reveal
  const cards = document.querySelectorAll('.card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  cards.forEach((card, index) => {
    card.style.opacity = '0';
    // Initial transform handled by CSS/JS interaction below
    observer.observe(card);
  });

  // --- NEW: Particles System (Embers) ---
  const canvas = document.getElementById('particles');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height + canvas.height; // Start below or random
        this.size = Math.random() * 3 + 1;
        this.speedY = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 1;
        this.color = `rgba(255, ${Math.floor(Math.random() * 100)}, 0, ${Math.random() * 0.5 + 0.2})`;
        this.life = Math.random() * 100 + 50;
      }

      update() {
        this.y -= this.speedY;
        this.x += this.speedX;
        this.life--;

        if (this.life <= 0 || this.y < -10) {
          this.reset();
          this.y = canvas.height + 10; // Reset to bottom
        }
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function initParticles() {
      for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
      }
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animateParticles);
    }

    initParticles();
    animateParticles();
  }

  // --- NEW: Mouse Parallax ---
  const heroBg = document.querySelector('.hero-bg');
  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20; // -10 to 10
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    if (heroBg) {
      heroBg.style.transform = `scale(1.1) translate(${-x}px, ${-y}px)`;
    }
  });

  // --- NEW: 3D Tilt Effect for Cards ---
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -10; // Max 10deg
      const rotateY = ((x - centerX) / centerX) * 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
  });
});
