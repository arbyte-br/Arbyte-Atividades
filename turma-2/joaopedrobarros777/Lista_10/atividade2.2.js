async function simulateDownload(imagem){
    let a = new Promise((resolve, reject) => {
        
        setTimeout(() => {
            try {
                if (imagem) {
                    resolve("Imagem baixada")
                } else {
                    throw Error("deu ruim")
                }
            } catch (e) {
                reject(e)
            }
        })
    }, Math.random(5000))

    return a
}
simulateDownload(true)
    .then(res => console.log(res))
    .catch(err => console.log(err));