const btn = document.getElementById('magic-btn');
const cursorLight = btn.querySelector('.cursor-light');
const textSpan = btn.querySelector('.text');
const particlesContainer = document.getElementById('particles-container');

let isAnimating = false;

btn.addEventListener('mouseenter', () => {
  btn.classList.add('hovered');
});

btn.addEventListener('mouseleave', () => {
  btn.classList.remove('hovered');
  cursorLight.style.left = '50%';
  cursorLight.style.top = '50%';
});

btn.addEventListener('mousemove', (e) => {
  const rect = btn.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  
  cursorLight.style.left = `${x}%`;
  cursorLight.style.top = `${y}%`;
});

btn.addEventListener('mousedown', () => {
  if (!isAnimating) fireParticles(8, true);
});

btn.addEventListener('click', () => {
  if (isAnimating) return;
  isAnimating = true;
  btn.classList.add('animating');
  
  setTimeout(() => fireParticles(42, false), 120);
  
  setTimeout(() => {
    btn.classList.add('success');
    btn.classList.remove('animating');
    
    // Animate text change
    textSpan.style.opacity = '0';
    textSpan.style.transform = 'translateY(6px) scale(0.9)';
    setTimeout(() => {
      textSpan.textContent = 'Magic Complete';
      textSpan.style.opacity = '1';
      textSpan.style.transform = 'translateY(0) scale(1)';
    }, 200);
    
  }, 420);
  
  setTimeout(() => {
    btn.classList.remove('success');
    
    textSpan.style.opacity = '0';
    textSpan.style.transform = 'translateY(-6px) scale(0.9)';
    setTimeout(() => {
      textSpan.textContent = 'Magic';
      textSpan.style.opacity = '1';
      textSpan.style.transform = 'translateY(0) scale(1)';
    }, 200);
    
  }, 1900);
  
  setTimeout(() => {
    isAnimating = false;
  }, 2200);
});

function fireParticles(count, isMini) {
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const distance = isMini ? 20 + Math.random() * 45 : 55 + Math.random() * 130;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance;
    const size = 2 + Math.random() * (isMini ? 2 : 4);
    const duration = isMini ? 0.4 : 0.55 + Math.random() * 0.55;
    const delay = isMini ? 0 : Math.random() * 0.08;
    
    const p = document.createElement('span');
    p.classList.add('particle');
    p.style.width = `${size}px`;
    p.style.height = `${size}px`;
    
    particlesContainer.appendChild(p);
    
    // Trigger animation in next frame
    requestAnimationFrame(() => {
      p.style.transition = `all ${duration}s cubic-bezier(0.15, 0.75, 0.3, 1) ${delay}s`;
      p.style.transform = `translate(${tx}px, ${ty}px) scale(0)`;
      p.style.opacity = '0';
    });
    
    // Cleanup
    setTimeout(() => {
      if (particlesContainer.contains(p)) {
        particlesContainer.removeChild(p);
      }
    }, (duration + delay) * 1000 + 100);
  }
}
