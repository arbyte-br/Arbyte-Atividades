let rs = require ('readline-sync')

let valor1 = rs.questionFloat (console.log('Digite um número maior que zero:'))

let valor2 = rs.questionInt (console.log('Digite outro número maior que zero:'))

let resultado = 0

if (valor1 <= 0 || valor2 <= 0){
    console.log ('Você não digitou um número maior que zero!')
}
else{
for (contador = 0; contador < valor1; contador ++ ) {
    resultado = valor2 + resultado
}
console.log('O valor da multiplicação é ' + resultado + '.')
}

