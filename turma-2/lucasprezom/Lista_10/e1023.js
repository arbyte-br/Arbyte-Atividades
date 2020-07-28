console.log("compra em processamento...")

async function simulateDownload(compra){
    let a = new Promise((resolve, reject) => {
        
        setTimeout(() => {
            try {
                if (compra) {
                    resolve("compra aprovada")
                } else {
                    throw Error("compra negada")
                }
            } catch (e) {
                reject(e)
            }
        }, (5000))
    })

    return a
}
simulateDownload(false)
    .then(res => console.log(res))
    .catch(err => console.log(err));
