let rs = require('readline-sync')

let numero = 0

while (numero < 50){
    numero++
    if (numero%2 == 0){
        console.log(`${numero} - PAR`)
    }else if (numero%2 != 0){
        console.log(`${numero} - IMPAR`)
    }else if (numero%1 == numero || numero%numero == 1 ){
        console.log(`${numero}`)
    }
}
//incompleto
// nao estou conseguindo fazer imprimir PAR e PRIMO