let rs = require("readline-sync")

let nomeUsuario1 = rs.question("Digite seu nome, usuario 1")
let nomeUsuario2 = rs.question("Digite seu nome, usuario 2")
let numeroUsuario1 = rs.question("Digite um numero, usuario 1")
let numeroUsuario2 = rs.question("Digite um numero, usuario 2")

var usuario1 = {
    nome: nomeUsuario1,
    numero: numeroUsuario1,
}

var usuario2 = {
    nome: nomeUsuario2,
    numero: numeroUsuario2,
}

if(usuario1.numero < usuario2.numero){
    console.log(`${nomeUsuario1} digitou o numero maior`)
}
else{
    console.log(`${nomeUsuario2} digitou o numero maior`)
}
