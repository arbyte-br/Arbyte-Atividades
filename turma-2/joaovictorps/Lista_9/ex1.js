let rs = require('readline-sync')
let median = require('median')

function pedirNotas() {
    let notas = []
    for(let i = 1; i < 5;i++) {
        let nota = rs.questionInt(`Digite a ${i}° nota: `)
        notas.push(nota)
        console.log(notas)
    }
    return notas
}
let notas = pedirNotas()
let valor = median(notas)
console.log("A mediana é ", valor)

