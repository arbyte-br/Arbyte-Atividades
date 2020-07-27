// 1 (Obrigatório) - Crie um programa que contenha duas funções, uma delas deve simular o
// download de uma imagem de forma síncrona e, a outra deve simular o download desta imagem
// de forma assíncrona.

function simulateDownload() {

    for(let i = 0; i < 1000000000; i++){
        
    }
    console.log('Imagem SIN baixada')
}

function simulateDownload2(){
    setTimeout(() => {
        console.log('Imagem Asin baixada');
    }, simulateDownload(500000000))
}


simulateDownload2()