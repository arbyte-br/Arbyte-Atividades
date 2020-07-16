//atividade 4

let rs = require('readline-sync')

let numero = rs.questionInt('Insira um numero: \n')

let contador = 0;

while (contador <= numero) {
    contador = contador + 2
    console.log(contador)
}