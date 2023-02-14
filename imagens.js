// imagens presentes no jogo e sua execuções
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

//sons
let somDaTrilha;
let somDaPancada;
let somDosPontos;

function preload() {
    imagemDaEstrada = loadImage("imagens/estrada.png");
    imagemDoAtor = loadImage("imagens/lagartixa.png");
    imagemCarro = loadImage("imagens/carro-2.png");
    imagemCarro2 = loadImage("imagens/carro-3.png");
    imagemCarro3 = loadImage("imagens/carro-1.png");
    imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3,
        imagemCarro, imagemCarro2, imagemCarro3];

    somDoTrafego = loadSound("sons/trafego.mp3");
    somDaTrilha = loadSound("sons/trilha.mp3");
    somDaPancada = loadSound("sons/pancada.mp3");
    somDosPontos = loadSound("sons/ponto.mp3");
}