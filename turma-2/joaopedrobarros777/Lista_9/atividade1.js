let median = require("median")

let rs = require("readline-sync")

let nota1 = rs.questionInt("Digite a primeira nota")

let nota2 = rs.questionInt("Digite a segunda nota")

let nota3 = rs.questionInt("Digite a terceira nota")

let nota4 = rs.questionInt("Digite a quarta nota")

let notas = [nota1, nota2, nota3, nota4]

let media = median(notas)

console.log(media)