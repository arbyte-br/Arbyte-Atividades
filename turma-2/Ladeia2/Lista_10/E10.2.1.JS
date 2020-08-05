// (Obrigatório) - Crie um programa que contenha duas funções, uma delas deve simular o
// download de uma imagem de forma síncrona e, a outra deve simular o download desta imagem
// de forma assíncrona.
let rs = require('readline-sync')

console.log(' D SINCRONO ')

function downloadSincrono(imagem){
    if(imagem){
        return console.log('Download concluído!')
    } else{
        return console.log('Falha no download!')
    }
}
function processImagen(callback){
    console.log('Baixando imagem...')
    let imagem = rs.keyInYN('Deseja que o download seja concluído? ')
    callback(imagem)
}
processImagen(downloadSincrono)

console.log('===== DOWNLOAD ASSINCRONO =====')

function downloadAssincrono() {
    return new Promise((resolve, reject) => {
        console.log('Efetuando download...')
        let sucesso = rs.keyInYN('Deseja que o download seja concluído? ')
        
        if (sucesso) {
            setTimeout(() => {
                resolve('Download concluído!')
            }, 3000)
        }
        else {
            setTimeout(() => {
                reject('Falha no download!')
            }, 3000)
        }
    })
}

downloadAssincrono()
    .then(res => console.log(res))
    .catch(err => console.log(err));