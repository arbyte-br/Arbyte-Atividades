let rs = require ('readline-sync')

let n1 = rs.questionInt('Digite um numero: ')
let n2 = rs.questionInt('Digite outro numero: ')

function numero(n1, n2) {
    if (n1 == 80 && n2 == 80) {
        console.log ('Ambos numeros estao corretos!') 
    } else if (n1 == 80) {
        console.log ('O primeiro numero esta correto!') 
    } else if (n2 == 80) {
        console.log ('O segundo numero esta correto!') 
    }else {
        console.log('Você errou o numero.')
    }
}  
numero(n1, n2)