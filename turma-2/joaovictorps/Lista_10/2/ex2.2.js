function random(max) {
    return Math.random() * max;
  }
  

function simulandoDownload(){
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {
            let r = parseInt(random(10))
            console.log(r)
            if( r % 2 === 0){
                resolve("Imagem baixada.")
            } else {
                reject("Não foi possível baixar todas as imagens.")
            }
        }, random(2000))
    })
}


function donwload(){
    console.log("Renderizando imagem")

    Promise.all([
        simulandoDownload(),
        simulandoDownload(),
        simulandoDownload()
    ]).then(res => console.log(res))
        .catch(err => console.log(err))

    console.log('Página renderizada')
}

donwload()