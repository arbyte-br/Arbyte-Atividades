// (Obrigatório) - Crie um programa que simula o download de múltiplas imagens de forma
// assíncrona. O programa deve conter ‘.then’ e ‘.catch’ para tratar o sucesso e a falha da
// promisse.

const { resolve } = require("dns");
const { rejects } = require("assert");

function random(max) {
    return Math.random() * max;
  }

function simulateDownload() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let numeroAletorio = parseInt(random(10))
            console.log('Numero aletório: ' + numeroAletorio)
            if(numeroAletorio % 2 === 0){
                resolve('Imagem baixada / Numero Par')
            }else{
                reject('Imagem Não baixada / Numero impar') // simulação
            }
        }, 1000)
    })
}
           
 function simulateDownload2(){
    console.log('Compra em processamento');
    
    simulateDownload()
        .then(res => console.log(res))
        .catch(err => console.log(err));

    
}


simulateDownload2()

