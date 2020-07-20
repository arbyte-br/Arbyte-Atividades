let rs = require('readline-sync')
let median = require('median')

let mediaNotas = []
let calcularMedia;

for (let i = 0; i < 4; i++) {
    let notaDigitada = rs.questionInt(`Digite a nota ${i+1}: `)
    mediaNotas.push(notaDigitada)
}
calcularMedia = median(mediaNotas)

console.log("A média das notas do aluno é: " + calcularMedia)