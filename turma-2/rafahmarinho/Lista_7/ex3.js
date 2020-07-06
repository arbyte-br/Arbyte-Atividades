// (OBRIGATÓRIO) Faça uma função que receba uma lista de números inteiros (um
//     array) e imprima no console qual o maior. Ao executar o seu código, deve ser impresso
//     na tela o maior número. (Não é necessário pedir dados para o usuário, você pode
//     definir os valores usados na aplicação aleatoriamente)
let lista = [3, 2, 34, 12, 42, 100, 213, 798, 999, 0, 05]

function numeroMaior(numerosDaLista) {
    for (let i = 0; i < lista.length; i++){
        let numeroAtual = lista[i]
        let numeroMaiorEncontrado = true
        for (let j = 0; j < lista.length; j++){
            if (lista[j] > numeroAtual){
                numeroMaiorEncontrado = false
            }
        }
        if (numeroMaiorEncontrado){
            console.log(numeroAtual)
            break
        }
}
}
numeroMaior(lista)