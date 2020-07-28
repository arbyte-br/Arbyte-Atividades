function random(max) {
    return Math.random() * max;
  }
  

function processarCompra(){
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {
            let r = parseInt(random(10))
            console.log(r)
            if( r % 2 === 0){
                resolve("Compra bem sucedida.")
            } else {
                reject("Compra mal sucedida.")
            }
        }, random(2000))
    })
}

function compra(){
    console.log('Processando compra...')

    processarCompra()
        .then(resposta => {
            console.log(resposta)
        })
        .catch(reject => {
            console.log(reject)
        })

    console.log('Processo finalizado.')
}

compra()