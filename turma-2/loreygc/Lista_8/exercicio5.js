let rs = require("readline-sync")

let usuario = new Object()

usuario.nome = rs.question("Informe seu nome: \n")

usuario.numero = []

for(i=0; i<3; i++){
    num = rs.question("Informe um número: \n")
    usuario.numero.push(num)
}

console.log(usuario)