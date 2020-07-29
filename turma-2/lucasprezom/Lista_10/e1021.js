async function simulateDownload(imagem){
    let result = await new Promise((resolve, reject) => {
        if (imagem) {
            resolve(console.log("Imagem baixada"))
        } else {
            reject(console.log("deu ruim"))
        }
    }, Math.random(5000))
}
simulateDownload(true)

function syncDownload() {
    return "imagem baixada"
}
