let rs = require("readline-sync")

let l1 = rs.questionFloat("Qual a medida do lado 1? ")
let l2 = rs.questionFloat("Qual a medida do lado 2? ")
let l3 = rs.questionFloat("Qual a medida do lado 3? ")

if (l1 === l2 && l2 !== l3 || l2 === l3 && l1 !== l2 || l3 === l1 && l2 !== l3) {
    console.log('Esse triângulo possui 2 lados iguais, então ele é um triângulo Isóscele.')
}else if (l1 !== l2 && l2 !== l3 && l3 !== l1){
    console.log('Esse triângulo possui todos os lados diferentes, então ele é um triângulo Escaleno.')
}else {
    console.log('Esse triângulo possui todos os lados iguais, então ele é um triângulo Equilátero.')
}