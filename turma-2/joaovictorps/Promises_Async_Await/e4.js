async function delay(ms) {
    console.log("Processando...")
    return new Promise(resolve => setTimeout(
        resolve, ms));
}

async function iniciandoDownload() {
    return new Promise ((resolve, reject) =>{
        resolve('Download concluído')
    })
}


async function simulandoDownload() {
    console.log('Download iniciado')

    let processamento = await delay(5000)

    let iniciando = await iniciandoDownload()
    console.log(iniciando)
}

simulandoDownload()