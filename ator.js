//Variáveis do ator
let xAtor = 90
let yAtor = 368
let colisao = false
let pontos = 0
// ações do ator
function mostraAtor() {
    image(imagemDoAtor, xAtor, yAtor, 30, 30)
}

function movimentaAtor() {
    if (keyIsDown(87)) {
        yAtor -= 3;
    }
    if (keyIsDown(83)) {
        if (limite()) {
            yAtor += 3;
        }
    }
}

function houveColisao() {
    for (let v = 0; v < imagemCarros.length; v++) {
        colisao = collideRectCircle(xCarros[v], yCarros[v],
            comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
        if (colisao) {
            colidiu();
            somDaPancada.play();
            if (pontos > 0) {
                pontos -= 1;
            }
        }
    }

}

function colidiu() {
    yAtor = 366
}

function exibePontos() {
    textAlign(CENTER);
    textSize(25);
    fill(color(34, 139, 34))
    text(pontos, width / 5, 27);

}

function ganhouPontos() {
    if (yAtor < 15) {
        pontos += 1;
        somDosPontos.play();
        colidiu();
    }
}

function limite() {
    return yAtor < 366;
}