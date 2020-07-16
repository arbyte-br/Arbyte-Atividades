let isOdd = require ( 'is-odd' ) 
let rs = require('readline-sync')

let entradaUsuario = rs.questionInt('Digite um numero: \n')

 
if(isOdd(entradaUsuario)== true){
    console.log(`${entradaUsuario} é impar.`)
}else{
    console.log(`${entradaUsuario} é par.`)
}

