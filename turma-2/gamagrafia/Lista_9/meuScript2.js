let imc= require('fasam-imc-calc')
let rs= require ('readline-sync')



let altura= rs.questionInt('Qual sua altura?')
let peso= rs.questionInt('Qual seu peso?')

let imcFinal= new imc(peso, altura)

console.log('Seu IMC É ' +imcFinal.calc())




