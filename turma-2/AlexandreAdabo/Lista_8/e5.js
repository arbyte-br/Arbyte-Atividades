let rs = require('readline-sync')
let usuario = rs.question('Qual seu nome ? ')

let numero1 = rs.questionFloat('Digite o primeiro numero: ')
let numero2 = rs.questionFloat('Digite o segundo numero: ')
let numero3 = rs.questionFloat('Digite o terceiro numero: ')
let numerosdigitados = []
numerosdigitados.push(numero1)
numerosdigitados.push(numero2)
numerosdigitados.push(numero3)
let InfUsuario = {usuario, numerosdigitados}
console.log(InfUsuario)