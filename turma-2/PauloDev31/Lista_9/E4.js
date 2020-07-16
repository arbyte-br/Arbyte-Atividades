let ehPrimo = require('prime-number')
let rs = require('readline-sync')

let entradaUsuario = rs.questionInt('Digite um numero: \n')

if(ehPrimo( entradaUsuario) == true){
    console.log(`${entradaUsuario} é primo.`)
}else{
    console.log(`${entradaUsuario} não é primo.`)
}