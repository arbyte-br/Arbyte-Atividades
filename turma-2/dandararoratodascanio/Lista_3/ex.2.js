//atividade 2

let rs = require('readline-sync')

let numero1 = rs.questionInt("Insira o primeiro número inteiro: ")

let numero2 = rs.questionInt("Insira o segundo número inteiro: ")


let soma = 0;
let contador = 0;

while (contador < numero1 ) {
    soma = soma + numero2;
    contador ++;
}
console.log(" O resultado é igual: " + soma)

