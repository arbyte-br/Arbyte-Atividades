let rs = require('readline-sync')

let quantidade = rs.questionInt('Quantas maças você comprou ? \n')

let macasDesconto = quantidade >= 12

if(macasDesconto) {
    let totalPagar = quantidade*0.25
    console.log(`R$ ${totalPagar}`)
} else {
    let totalPagar = quantidade*0.30
    console.log(`R$ ${totalPagar}`)
}