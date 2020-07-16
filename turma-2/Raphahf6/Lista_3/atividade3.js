// 3. (OBRIGATÓRIO) ​ Escreva um algoritmo que imprima todos os números ímpares de 1 até 100.

let counter = 1
let limite = 100

while(counter <= limite){
    if(counter % 2 !== 0){
        console.log('O numero ' + counter + ' é IMPAR!')
    } 
    counter++
}