let rs = require ('readline-sync')

let n1 = rs.questionInt('Digite um numero: ')
let n2 = rs.questionInt('Digite outro numero: ')

function numeroDaSorte(n1, n2) {
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
numeroDaSorte(n1, n2)

let comparaN1 = n1 - 80
let comparaN2 = n2 - 80

function comparativo(comparaN1,comparaN2) {
if (comparaN1 < comparaN2) {
    console.log('O primeiro número chegou mais próximo de acertar!')
} else if(comparaN1 > comparaN2){
    console.log ('O segundo número chegou mais próximo de acertar!')
} else{
    console.log('As suas chances de acertos foram iguais!')
}
}
comparativo(comparaN1,comparaN2)