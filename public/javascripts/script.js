document.addEventListener(
  'DOMContentLoaded',
  () => {
    console.log('IronGenerator JS imported successfully!');
  },
  false
);

const ctx = canvas.getContext('2d');
//rayon de la boule
circRad = 15;
//centre de la boule
let x = 20;
let y = 20;
//distance par mouvement
let dx = 2;
let dy = 2;
ctx.fillStyle = ' #a904d3';

function drawCirc() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(x, y, circRad, 0, 2 * Math.PI, true);
  if (x < 0 || x > canvas.width) {
    dx = -dx;
  }
  if (y < 0 || y > canvas.height) {
    dy = -dy;
  }
  x += dx;
  y += dy;
  ctx.closePath();
  ctx.fill();
  window.requestAnimationFrame(drawCirc);
}
drawCirc();
