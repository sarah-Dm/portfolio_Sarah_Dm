document.addEventListener(
  'DOMContentLoaded',
  () => {
    console.log('IronGenerator JS imported successfully!');
  },
  false
);

//canvas
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
let background = '#766d6d';
let couleurPolice = '#a904d3';

ctx.textBaseline = 'top';
ctx.font = '17px serif';
// ctx.beginPath();
// ctx.moveTo(40, canvas.width / 2 - 20);
// ctx.lineTo(40, 20);
// ctx.lineTo(canvas.width / 2 - 20, 20);
// ctx.stroke();
// ctx.closePath();

let startX = 60;
let demiHauteur = canvas.height / 2;
let x = startX;
let longueurTiret = 10;

function tracer() {
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  //coté gauche
  if (demiHauteur > canvas.height / 5) {
    ctx.beginPath();
    ctx.moveTo(startX, demiHauteur - 20);
    ctx.lineTo(startX, demiHauteur - 25);
    ctx.stroke();
    ctx.closePath();
    demiHauteur -= longueurTiret;
    console.log(x, demiHauteur);
    //background
    ctx.fillStyle = background;
    ctx.fillRect(
      startX / 6,
      canvas.height / 2,
      ctx.measureText('Collaboration à l’international').width + 10,
      20
    );
    //text
    ctx.fillStyle = couleurPolice;
    ctx.fillText(
      'Collaboration à l’international',
      startX / 6,
      canvas.height / 2
    );
    //coté haut
  } else if (x < canvas.width - startX) {
    //traits
    ctx.beginPath();
    ctx.moveTo(x, demiHauteur - 20);
    ctx.lineTo(x + 5, demiHauteur - 20);
    ctx.stroke();
    ctx.closePath();
    x += longueurTiret;
    //background
    ctx.fillStyle = background;
    ctx.fillRect(
      canvas.width / 3 + longueurTiret,
      demiHauteur - 20 - 10,
      ctx.measureText('Gestion de projet').width + 10,
      20
    );
    //text
    ctx.fillStyle = couleurPolice;
    ctx.fillText(
      'Gestion de projet',
      canvas.width / 3 + longueurTiret,
      demiHauteur - 20 - 5
    );
  }
}

// tracer();

setInterval(tracer, 300);
