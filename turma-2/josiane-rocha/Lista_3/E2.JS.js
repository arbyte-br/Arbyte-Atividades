let rs = ("readline-sync")

let primeiroNumero = rs.questionFloat('Digite um número: ') //3
let segundoNumero = rs.questionInt('Digite outro número: ') //2

let contador = 0

let resultado = 0

while(contador < segundoNumero) {
    resultado = resultado + primeiroNumero
    contador++
}

console.log("O resultado da multiplicação é: " + resultado)