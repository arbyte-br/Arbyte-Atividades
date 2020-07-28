const random = (max) => {
    return Math.random() * max;
}

const simularDownload = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Imagem baixada')
        }, random(1000))
    })
}

const download = () => {
    console.log('Renderizando página');

    simularDownload()
        .then(res => console.log(res))
        .catch(err => console.log(err));
    
    console.log('Página renderizada');
}

download();