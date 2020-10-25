document.addEventListener(
  'DOMContentLoaded',
  () => {
    console.log('IronGenerator JS imported successfully!');
  },
  false
);

//animation balle de la home page
const ctx = canvas.getContext('2d');
//rayon de la boule
circRad = 5;
//centre de la boule
let x = 20;
let y = 20;
//distance par mouvement
let dx = 1;
let dy = 1;
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

//affichage du titre de la home page
//récuperer les lettres dans les H2 dans un array
const $titre = document.querySelectorAll('#titre');
let $lettre = document.querySelectorAll('#titre h1, #titre h2, #titre h3');
const $dureeParAnimation = 0.1;
$lettre = Array.from($lettre);
//pour chaque élément, on modifie le css : animation-delays=délai supp, dans le html
for (let i = 0; i < $lettre.length; i++) {
  $lettre[i].setAttribute(
    'style',
    ';animation-delay:' + $dureeParAnimation * i + 's'
  );
  function keepLetter() {
    $lettre[i].setAttribute('style', 'opacity:1');
  }
  setTimeout(keepLetter, $lettre.length * $dureeParAnimation * 1000);
}

//on modifie le contenu du html avec ce nouveau style
// "<span style='animation-delay: " +
//   0.035 * character +
//   "s'>" +
//   elements[element].innerText[character] +
//   '</span>';
