// (Não é obrigatória mas é divertida) Escreva uma aplicação em JS que receba dois
// usuários. De cada usuário, a aplicação deve receber um número de 1 a 100. A
// aplicação deve informar qual dos usuários chegou mais perto do número correto. (Você
// pode escolher qual vai ser o número correto)

let rs = require ('readline-sync')

let n1 = rs.questionInt('Digite um número: ')
let n2 = rs.questionInt('Digite outro número: ')

function numeroDaSorte(n1, n2) {
    if (n1 == 35 && n2 == 35) {
        console.log ('Ambos números estão corretos!') 
    } else if (n1 == 35) {
        console.log ('O primeiro número está correto!') 
    } else if (n2 == 35) {
        console.log ('O segundo número está correto!') 
    }else {
        console.log('Você errou o número.')
    }
}  
numeroDaSorte(n1, n2)

let comparaN1 = n1 - 35
let comparaN2 = n2 - 35

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