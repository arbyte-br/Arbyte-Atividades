let rs = require ('readline-sync')

let inicio = rs.questionInt ('Digite um valor: ')

let fim = rs.questionInt ('Digite um valor superior que o primeiro digitado: ')

if (inicio < fim){
    console.log('Inicio da contagem:')
    for (inicio; inicio <= fim; fim++) {
        console.log(inicio);       
    }
    console.log('Final da contagem.')
}
else{
    console.log('Você digitou os valores de forma incorreta.')
}