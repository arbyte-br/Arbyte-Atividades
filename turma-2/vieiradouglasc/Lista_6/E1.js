let rs = require('readline-sync')

let listaUser1 = []
let listaUser2 = []

let user1 = rs.question('Insira seu nome: ')
let user2 = rs.question('Insira seu nome: ')

console.clear()

for (let i = 0; i < 5; i++) {
    let resp = -1
    while (resp < 0 || resp > 10) {
        resp = rs.questionInt(`${user1}, insira um número de 1 a 10: `)
        if (resp < 0 || resp > 10) {
            console.log('Número inválido! Digite um número de 1 a 10.')
        }
    }
    listaUser1.push(resp)
}

console.clear()

for (let i = 0; i < 5; i++) {
    let resp = -1
    while (resp < 0 || resp > 10) {
        resp = rs.questionInt(`${user2}, insira um número de 1 a 10: `)
        if (resp < 0 || resp > 10) {
            console.log('Número inválido! Digite um número de 1 a 10.')
        }
    }
    listaUser2.push(resp)
} 

console.clear()

let numIguais = []

for (let i = 0; i < listaUser1.length; i++) {
    for (let j = 0; j < listaUser2.length; j++) {
        if(listaUser1[i] === listaUser2[j]) {
            numIguais.push(listaUser1[i])
        }
    }
}

console.log(`Os números iguais entre ${user1} e ${user2} são: `, numIguais)