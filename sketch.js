
function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
  somDoTrafego.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  RetorneAPosição();
  houveColisao();
  exibePontos();
  ganhouPontos();
}

