let rs = require('readline-sync')

let nomeJogador1 = rs.question('Digite o nome do jogador 1: ')
let nomeJogador2 = rs.question('Digite o nome do jogador 2: ')
console.clear()
let listaJogador1 = []

for (let i = 0; i < 5; i++) {
    let np1 = rs.questionInt(`Insira um numeros entre 0 e 10, ${nomeJogador1}: `);;
    listaJogador1.push(np1)
}
console.clear()
let listaJogador2 = []
for (let i = 0; i < 5; i++) {
    let np2 = rs.questionInt(`Insira um numeros entre 0 e 10, ${nomeJogador2}: `);
    listaJogador2.push(np2)
}
console.clear()
let repetidos = []
for (let i = 0; i < 5; i++) {
    let itemLista1 = listaJogador1[i]
    for (let j = 0; j < 5; j++) {
        let itemLista2 = listaJogador2[j]
        let achouNumeroRepetido = itemLista1 === itemLista2
        if (achouNumeroRepetido) {
            let numeroNaoEstaInclusoNaLista = !repetidos.includes(itemLista1)
            if (numeroNaoEstaInclusoNaLista) {
                repetidos.push(itemLista1)
            }
        }
    }
}
console.log(`Estes são os número repetidos: ${repetidos}`)