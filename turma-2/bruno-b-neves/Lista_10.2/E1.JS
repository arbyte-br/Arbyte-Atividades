// Fazendo download de imagem de forma sincrona.
const simuladorDownload = () => {
    for (let i = 0; i < 10000000000; i++) {

    }
    console.log("Imagem baixada")
}

const downloadSincrono = () => {
    console.log('Renderizando página');
    
    simuladorDownload();

    console.log('Página renderizada');
}

downloadSincrono();