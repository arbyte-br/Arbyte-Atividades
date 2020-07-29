function simulandoDownload(){
    for( let i = 0; i <= 100; i++){
        while ( i == 20 || i === 50 || i == 80 || i === 100){
            console.log(`${i}%`)
            break
        }
    }
    console.log('Imagem Baixada')
}

function donwload(){
    console.log("Renderizando imagem")

    simulandoDownload();

    console.log('Página renderizada')
}

donwload()