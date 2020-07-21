let rs = require ('readline-sync')

let n1 = rs.questionInt('Digite um número: ')
let n2 = rs.questionInt('Digite outro número: ')

function numeroDaSorte(n1, n2) {
    if (n1 == 46 && n2 == 46) {
        console.log ('Ambos números estão corretos!') 
    } else if (n1 == 46) {
        console.log ('O primeiro número está correto!') 
    } else if (n2 == 46) {
        console.log ('O segundo número está correto!') 
    }else {
        console.log('Você errou o número.')
    }
}  
numeroDaSorte(n1, n2)