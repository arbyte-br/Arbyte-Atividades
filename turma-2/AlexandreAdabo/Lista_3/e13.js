let rs = require('readline-sync')
let numerosdigitados = []
let totalsoma = 0
let totalmultiplicacao = 1
while(numerosdigitados.length < 5){
 let numero = rs.questionInt('Digite um numero: ')
    numerosdigitados.push(numero)
    if(numero % 2 === 0){
      totalsoma = totalsoma + numero
    } else if (numero % 2 !== 0){
      totalmultiplicacao = totalmultiplicacao * numero 
    }
}
console.log('Os numeros digitados foram: ', numerosdigitados)
console.log('Soma dos pares: ', totalsoma)
console.log('Multiplicacao dos impares: ', totalmultiplicacao)