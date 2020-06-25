// 3. (OBRIGATÓRIO) ​ Escreva um algoritmo que imprima todos os números ímpares de 1 até 100.


let limite = 100

for(counter = 1; counter < limite; counter++){
    if(counter % 2 !== 0){
        console.log('O numero ' + counter + ' é IMPAR!')
    } 
}