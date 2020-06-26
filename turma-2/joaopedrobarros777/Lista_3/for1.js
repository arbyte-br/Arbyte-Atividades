let rs = require('readline-sync')

let entradaUsuario = rs.questionInt("Insira um número: ")

let contador = 0

for (let i = 0; i < entradaUsuario; i++){
    console.log("Ola mundo " + i)
}