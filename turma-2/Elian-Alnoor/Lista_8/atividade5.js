// Crie um programa que pergunte o nome do usuário e peça para este usuário digitar 3 
// números, o programa deve imprimir, no formato de um objeto, o nome e os números 
// informados. 
let rs = require("readline-sync")

let usuario = new Object()

usuario.nome = rs.question("Informe seu nome: \n")

usuario.numero = []

for(i=0; i<3; i++){
    num = rs.question("Informe um número: \n")
    usuario.numero.push(num)
}

console.log(usuario)