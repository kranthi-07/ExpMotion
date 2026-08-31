const container = document.getElementById('premium-spotlight-container');
const spotlight = container.querySelector('.spotlight');

// Physics variables for smooth spring-like follow
let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

container.addEventListener('mouseenter', () => {
  spotlight.classList.add('active');
});

container.addEventListener('mouseleave', () => {
  spotlight.classList.remove('active');
});

container.addEventListener('mousemove', (e) => {
  const rect = container.getBoundingClientRect();
  // Offset by 125px to center the 250px circle
  mouseX = e.clientX - rect.left - 125;
  mouseY = e.clientY - rect.top - 125;
});

// Animation loop for smooth trailing
function animate() {
  currentX += (mouseX - currentX) * 0.1;
  currentY += (mouseY - currentY) * 0.1;
  
  spotlight.style.transform = `translate(${currentX}px, ${currentY}px)`;
  requestAnimationFrame(animate);
}

animate();
