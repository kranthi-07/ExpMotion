const btn = document.getElementById('magnetic-btn');
const glow = btn.querySelector('.inner-glow');

// Spring variables
let currentX = 0, currentY = 0;
let targetX = 0, targetY = 0;
let currentRotX = 0, currentRotY = 0;
let targetRotX = 0, targetRotY = 0;

btn.addEventListener('mouseenter', () => {
  btn.classList.add('hovered');
});

btn.addEventListener('mouseleave', () => {
  btn.classList.remove('hovered');
  targetX = 0;
  targetY = 0;
  targetRotX = 0;
  targetRotY = 0;
});

btn.addEventListener('mousemove', (e) => {
  const rect = btn.getBoundingClientRect();
  
  // Magnetic pull (relative to center)
  const middleX = e.clientX - (rect.left + rect.width / 2);
  const middleY = e.clientY - (rect.top + rect.height / 2);
  
  targetX = middleX * 0.4;
  targetY = middleY * 0.4;
  
  // 3D Tilt calculation (mapped from -50,50 to 15,-15)
  // middleY maps to rotX (vertical mouse affects horizontal axis)
  targetRotX = (middleY / 50) * -15; 
  targetRotY = (middleX / 50) * 15;
  
  // Inner glow (relative to top left)
  glow.style.setProperty('--x', `${e.clientX - rect.left}px`);
  glow.style.setProperty('--y', `${e.clientY - rect.top}px`);
});

// Spring physics animation loop
function animate() {
  currentX += (targetX - currentX) * 0.15;
  currentY += (targetY - currentY) * 0.15;
  currentRotX += (targetRotX - currentRotX) * 0.15;
  currentRotY += (targetRotY - currentRotY) * 0.15;
  
  btn.style.transform = `translate(${currentX}px, ${currentY}px) rotateX(${currentRotX}deg) rotateY(${currentRotY}deg)`;
  
  requestAnimationFrame(animate);
}

animate();
