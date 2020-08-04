let rs = require('readline-sync')
let numeroImagens = rs.questionInt('Quantas imagens deseja fazer o download? ')

function downloadAssincrono() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve()
        }, 6000)
        setTimeout(() => {
            reject()
        }, 6000)

    })
}
chamadasDaFunction = []
for (let i = 1; i <= numeroImagens; i++) {
    console.log('Baixando imagem: ' + i)
    chamadasDaFunction.push(downloadAssincrono())
}
function asyncDownload() {

    console.log('Efetuando download...')

    Promise.all(chamadasDaFunction)
    .then(res => console.log('Imagens baixadas!'))
    .catch(err => console.log('Falha no download.'))
}

    asyncDownload()