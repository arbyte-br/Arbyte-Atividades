let rs = require('readline-sync')

let valor = rs.questionInt('Digite um número: ')

let resultado = 0

if (valor < 0){
    console.log('Número inválido.')
} else{
    while(valor > resultado) {
        console.log('BIP BIP')
        resultado++
    }
}