let rs = require ('readline-sync')

let valor1 = rs.questionInt (console.log('Digite um número maior que zero:'))

let valor2 = rs.questionInt (console.log('Digite outro número maior que zero:'))

let resultado = 0
let contador = 0

if (valor1 <= 0 && valor2 <= 0){
    console.log ('Você não digitou um número maior que zero!')
}
else{
while (contador < valor1) {
    resultado = valor2 + resultado
    contador ++
    
}
console.log('O valor da multiplicação é ' + resultado + '.')
}
