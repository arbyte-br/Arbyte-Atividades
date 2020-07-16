// (OBRIGATÓRIO) Faça uma programa que receba 4 notas e calcule a mediana e
// apresente ao usuário o resultado.
// Utilize o pacote : https://www.npmjs.com/package/median

let median = require('median')
let rs = require('readline-sync')

let arr = []
function notaDoUser (nota) {
    for (i = 1; i <= 4; i++){
        let nota = rs.questionInt(`Qual foi a sua ${i} nota?:`)
    arr.push(nota)
    }
}
notaDoUser()

let value = median(arr)
 
console.log("A sua média é " + value)