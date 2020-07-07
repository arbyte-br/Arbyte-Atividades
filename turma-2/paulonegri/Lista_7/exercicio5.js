/*Escreva uma aplicação em JS que receba dois números do usuário e
retorne a soma dos mesmos. A soma deve ser feita em uma função.*/

let rs = require('readline-sync')
let primerioNumero = rs.questionInt(`Digite o primeiro numero: `)
let segundoNumero = rs.questionInt(`Digite o segundo numero: `)


function soma (){

    return primerioNumero + segundoNumero
}
console.log(`${primerioNumero} + ${segundoNumero} = ${soma()}`)