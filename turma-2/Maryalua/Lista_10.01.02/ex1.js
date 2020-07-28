/*1 (Obrigatório) - Crie um programa que contenha duas funções, 
uma delas deve simular o download de uma imagem de forma síncrona e, 
a outra deve simular o download desta imagem de forma assíncrona */

function DownloadImagem(){
    for(let i=0;i<10000;i++){
        //baixando imagem
    }
    console.log('Download completo');
}

function DownloadSinc(){
    console.log('Renderizando página');
    DownloadImagem();
    console.log('Página renderizada');
}
DownloadSinc()

//////////////////////////////////////////////////////////////////////
function random(max) {
    return Math.random() * max;
  }
function DownloadImagem2(){
    setTimeout(() =>{
        console.log('Download completo');
    }, random(1000))
}

function DownloadImagemAssinc(){
    console.log('Renderizando página');
    DownloadImagem2();
    console.log('Página renderizada')
}
DownloadImagemAssinc ()