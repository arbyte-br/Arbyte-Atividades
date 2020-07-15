//Faça uma função que receba uma lista de números inteiros (umarray) e imprima no console qual o maior.  Ao executar o seu código, deve ser impressona tela o maior número.                                     (Não é necessário pedir dados para o usuário, você pode definir os valores usados na aplicação aleatoriamente)

let lista = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

function detectaMaior(listaDeNumeros) {
    for (let i = 0; i < listaDeNumeros.length; i++) {
        let numeroSendoAvaliado = listaDeNumeros[i]
        let maiorNumeroLista = true

        for (let j = 0; j < listaDeNumeros.length; j++) {
            if (listaDeNumeros[j] > numeroSendoAvaliado) {
                maiorNumeroLista = false
            }
        }
        if (maiorNumeroLista) {
            console.log(numeroSendoAvaliado)
            break
        }
    }
}
detectaMaior(lista)