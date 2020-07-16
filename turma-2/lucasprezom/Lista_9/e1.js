// 1.(OBRIGATÓRIO)​ Faça uma programa que receba 4 notas 
// e calcule a mediana eapresente ao usuário o resultado.
// Utilize o pacote : ​https://www.npmjs.com/package/median

let rs = require ('readline-sync')
let median = require ('median')

let not1 = rs.questionInt('Digite sua nota 1:\n')
let not2 = rs.questionInt('Digite sua nota 2:\n')
let not3 = rs.questionInt('Digite sua nota 3:\n')
let not4 = rs.questionInt('Digite sua nota 4:\n')

let notas = [not1, not2, not3, not4]
var valor = median(notas)
 
console.log("Sua média é: " + valor)