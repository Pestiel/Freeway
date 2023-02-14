// variáveis dos carros e seus índices
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 95, 150, 210, 263, 318];
let velocidadeCarros = [2, 3, 3.5, 5, 2.5, 4];
let comprimentoCarro = 55;
let alturaCarro = 40;
// ações dos carros
function mostraCarro() {
    for (let v = 0; v < imagemCarros.length; v++) {
        image(imagemCarros[v], xCarros[v], yCarros[v],
            comprimentoCarro, alturaCarro);
    }
}

function movimentaCarro() {
    for (let v = 0; v < imagemCarros.length; v++) {
        xCarros[v] -= velocidadeCarros[v];
    }
}

function RetorneAPosição() {
    for (let v = 0; v < imagemCarros.length; v++) {
        if (passouDaTela(xCarros[v])) {
            xCarros[v] = 600;
        }
    }
}

function passouDaTela(xCarros) {
    return xCarros < - 45;

}