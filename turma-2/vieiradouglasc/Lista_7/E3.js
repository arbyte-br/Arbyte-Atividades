// Faça uma função que receba uma lista de números inteiros (um array) 
// e imprima no console qual o maior. 
// Ao executar o seu código, deve ser impressona tela o maior número. 
// (Não é necessário pedir dados para o usuário, 
// você podedefinir os valores usados na aplicação aleatoriamente)

let lista = [1, 2, 4, 87, 5]
function detectaMaior(listaDeNumeros) {
    for (let i = 0; i < listaDeNumeros.length; i++) {
        let numeroSendoAvaliado = listaDeNumeros[i]
        let numeroMaiorEncontrado = true
        for (let j = 0; j < listaDeNumeros.length; j++) {
            if (listaDeNumeros[j] > numeroSendoAvaliado) {
                numeroMaiorEncontrado = false
            }
        }
        if (numeroMaiorEncontrado) {
            console.log(numeroSendoAvaliado)
            break
        }
    }
}
detectaMaior(lista)
