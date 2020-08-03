// 1 (Obrigatório) - Crie um programa que contenha duas funções, 
// uma delas deve simular o download de uma imagem de forma síncrona e, 
// a outra deve simular o download desta imagem de forma assíncrona.

const rs = require('readline-sync');

// Forma Sincrona

function simulateDownloadSincron (){
    for (let i = 0; i <= 100; i++){
        console.log(`${i}%`);
    }
    console.log('Imagem baixada!');
}

//Forma Assincrona

function random (max){
    return Math.random() * max
}

function simulateDownloadAsincron (){
    setTimeout(() => {
        console.log('Imagem Baixada!');
    }, random(10000))
}

function Donwload (){
    let nome = rs.question('Digite seu nome: ')
        
    simulateDownloadAsincron()

    console.log(`Bem vindo ${nome}!`)

}

Donwload()



