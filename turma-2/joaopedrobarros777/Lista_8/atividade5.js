let rs = require ("readline-sync")

let nome = rs.question("Qual eh o seu nome?\n")

let numeros = []

for (let i = 0; i < 3; i++){
    let numerosUsuario = rs.questionInt("digite o numero da posicao: " + (i+1) + "\n")
    numeros.push(numerosUsuario)
}


let objeto = {nome: nome, numeros: numeros}

console.log(objeto)