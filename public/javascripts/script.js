document.addEventListener(
  'DOMContentLoaded',
  () => {
    console.log('IronGenerator JS imported successfully!');
  },
  false
);

// //animation
// const ctx = canvas.getContext('2d');
// //rayon de la boule
// circRad = 5;
// //centre de la boule
// let x = 20;
// let y = 20;
// //distance par mouvement
// let dx = 1;
// let dy = 1;
// ctx.fillStyle = '#a904d3';

// function drawCirc() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.beginPath();
//   ctx.arc(x, y, circRad, 0, 2 * Math.PI, true);
//   if (x < 0 || x > canvas.width) {
//     dx = -dx;
//   }
//   if (y < 0 || y > canvas.height) {
//     dy = -dy;
//   }
//   x += dx;
//   y += dy;
//   ctx.closePath();
//   ctx.fill();
//   window.requestAnimationFrame(drawCirc);
// }

//AFFICHAGE DU TITRE DE LA HOME PAGE
//récuperer les lettres du h2 dans un array
let $titre = document.querySelector('#titre');
let $lettres = 'Bonjour,  je suis Sarah, développeuse web Javascript';

//Séparer le titre en lettre
$lettres = $lettres.split('');

//Déclaration de la fonction d'impression des lettres 1 à 1
let i = 0;
addDelay = () => {
  if (i < $lettres.length) {
    $h2 = document.createElement('h2');
    $br = document.createElement('br');

    //si lettre, créer un h2 pour la lettre
    $titre.appendChild($h2);
    $h2.innerHTML = $h2.innerHTML + $lettres[i];
    //si , alors aller à la ligne
    if ($lettres[i] === ',') {
      $br = document.createElement('br');
      $br = $titre.appendChild($br);
    }
    i++;
  } else {
    clearInterval(showTitle);
    // setTimeout(drawCirc, 2000);
  }
};
showTitle = setInterval(addDelay, 100);
