// Faça uma função que receba dois valores numéricos inteiros e
// imprima no console qual o maior. Ao executar o seu código, deve ser impresso na tela o
// maior número. (Não é necessário pedir dados para o usuário, você pode definir os
// valores usados na aplicação aleatoriamente)

let lista = [44, 99]

function detectaMaior(listaDeNumeros) {

    for(let i = 0; i < listaDeNumeros.length; i++) {
        let numeroSendoAvaliado = listaDeNumeros[i]
        let numeroMaiorEncontrado = true;
        for(let j = 0; j < listaDeNumeros.length; j++) {
            if (listaDeNumeros[j] > numeroSendoAvaliado) {
                numeroMaiorEncontrado = false;
            } 
        }
        if (numeroMaiorEncontrado) {
            console.log(numeroSendoAvaliado)
            break;
        }
    }
}
detectaMaior(lista)