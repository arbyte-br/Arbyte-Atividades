let rs = require('readline-sync')

let usuario = {
    nome: null,
    numeros: []
}

usuario.nome = rs.question('Qual o seu nome? ')
console.log('Agora digite 3 numeros:')
for(let i = 1; i <= 3; i++){
    let escolhas = rs.questionInt(`Digite o número ${i}: `)
    usuario.numeros.push(escolhas)
}
console.log(usuario.nome, usuario.numeros)