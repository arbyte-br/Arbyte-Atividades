
/* (OBRIGATÓRIO) Escreva um programa que calcule a soma de todos os múltiplos de 3
e de 5 entre 1 e 1000
 */

let valor1 = 1000
let valor2 = 1000

if(valor1 < valor2){
    while (valor1 < valor2){
        if (valor1 % 3 == 0 && valor1 % 5 == 0) {
            console.log(`${valor1} PING PONG`)
        } else if (valor1 % 5 == 0){
            console.log(`${valor1} PING`)
        } else if (valor1 % 3 == 0){
            console.log (`${valor1} PONG`)
        } else{
            console.log(valor1)
        }
        valor1++
    } 
}else{
    while (valor1 > valor2){
        if (valor2 % 3 == 0 && valor2 % 5 == 0) {
            console.log(`${valor2} PING PONG`)
        } else if (valor2 % 5 == 0){
            console.log(`${valor2} PING`)
        } else if (valor2 % 3 == 0){
            console.log (`${valor2} PONG`)
        } else{
            console.log(valor2)
        }
        valor2++
    } 
}
