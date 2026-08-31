const layer1 = document.getElementById('layer-1');
const layer2 = document.getElementById('layer-2');
const layer3 = document.getElementById('layer-3');

// Spring targets
let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;

document.addEventListener('mousemove', (e) => {
  // mapped from -500 to 500 equivalent
  const x = e.clientX - window.innerWidth / 2;
  const y = e.clientY - window.innerHeight / 2;
  
  targetX = x;
  targetY = y;
});

function animate() {
  currentX += (targetX - currentX) * 0.1;
  currentY += (targetY - currentY) * 0.1;

  // React mapping:
  // Layer 1 (Background): [-500, 500] -> [20, -20]  ==> -0.04 factor
  // Layer 2 (Middle): [-500, 500] -> [-30, 30] ==> 0.06 factor
  // Layer 3 (Foreground): [-500, 500] -> [-70, 70] ==> 0.14 factor
  
  const l1X = currentX * -0.04;
  const l1Y = currentY * -0.04;
  
  const l2X = currentX * 0.06;
  const l2Y = currentY * 0.06;
  
  const l3X = currentX * 0.14;
  const l3Y = currentY * 0.14;
  
  layer1.style.transform = `translate(${l1X}px, ${l1Y}px)`;
  layer2.style.transform = `translate(${l2X}px, ${l2Y}px)`;
  layer3.style.transform = `translate(${l3X}px, ${l3Y}px)`;

  requestAnimationFrame(animate);
}

animate();
