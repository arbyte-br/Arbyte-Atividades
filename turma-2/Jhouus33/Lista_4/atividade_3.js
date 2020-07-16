// Escreva um programa javascript para escrever o seguinte padrão na
// tela, com N linhas:
// *
// * *
// * * *
// * * * *
// * * * * *

let rs = require('readline-sync')

let i = 0
let numUsuario = rs.questionInt('Digite um número: \n')
console.clear()
let ast = '*'

while (i <= numUsuario){
        console.log(ast.repeat(i))
        i++
}
        

  
