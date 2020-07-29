// Fazendo download de imagem de forma assincrona.
const random = (max) => {
    return Math.random() * max;
}

const downloadSimulador = () => {
    setTimeout(() => {
        console.log('Imagem baixada');
    }, random(1000))
}

const downloadAssincrono = () => {
    console.log('Renderizando página');

    downloadSimulador();

    console.log('Página renderizada')
}

downloadAssincrono();