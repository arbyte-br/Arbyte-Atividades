//e)Declare uma variável fora de um bloco, declare a mesma variável dentro de uma bloco e depois imprima seu valor depois do bloco.

let numero1 = 10
let numero2 = 20

if (numero1 > 0) {
    let numero2 = 10 
}    
console.log(numero2) // imprime o primeiro valor declarado fora do bloco.