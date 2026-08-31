const card = document.getElementById('glass-card');

let isDragging = false;
let initialMouseX = 0, initialMouseY = 0;
let currentX = 0, currentY = 0;
let targetX = 0, targetY = 0;

card.addEventListener('mousedown', (e) => {
  isDragging = true;
  initialMouseX = e.clientX - currentX;
  initialMouseY = e.clientY - currentY;
  card.style.cursor = 'grabbing';
});

window.addEventListener('mouseup', () => {
  isDragging = false;
  card.style.cursor = 'grab';
  // Snap back to center when released
  targetX = 0;
  targetY = 0;
});

window.addEventListener('mousemove', (e) => {
  if (isDragging) {
    e.preventDefault();
    
    // Calculate raw drag position
    let rawX = e.clientX - initialMouseX;
    let rawY = e.clientY - initialMouseY;
    
    // Constraints (-100 to 100) with rubber band elasticity
    if (rawX > 100) rawX = 100 + (rawX - 100) * 0.2;
    if (rawX < -100) rawX = -100 + (rawX + 100) * 0.2;
    if (rawY > 100) rawY = 100 + (rawY - 100) * 0.2;
    if (rawY < -100) rawY = -100 + (rawY + 100) * 0.2;
    
    targetX = rawX;
    targetY = rawY;
  }
});

function animate() {
  // Spring physics easing
  currentX += (targetX - currentX) * 0.15;
  currentY += (targetY - currentY) * 0.15;
  
  if (isDragging) {
    card.style.transform = `translate(${currentX}px, ${currentY}px) scale(1.05) rotate(2deg)`;
  } else {
    // Check if hovering to apply subtle scale
    const isHovered = card.matches(':hover');
    const scale = isHovered ? 1.02 : 1;
    card.style.transform = `translate(${currentX}px, ${currentY}px) scale(${scale})`;
  }
  
  requestAnimationFrame(animate);
}

animate();
