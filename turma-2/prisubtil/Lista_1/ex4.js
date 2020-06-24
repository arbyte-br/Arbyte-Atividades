/*(OBRIGATÓRIO) As maçãs custam R$ 0,30 cada se forem compradas menos do que
12, e R$ 0,25 se forem compradas 12 ou mais. Escreva um programa que leia o número
de maçãs compradas, calcule e escreva o valor total da compra
*/

let readlineSync = require('readline-sync');
let quantidadeMaca = readlineSync.questionInt('Digite a quantidade de macas: ')
let valorMaca = 0;
if(quantidadeMaca < 12 ){
    valorMaca = 0.3;
}else{
    valorMaca = 0.2;
}
console.log(`O valor total da compra é ${quantidadeMaca*valorMaca}. `)