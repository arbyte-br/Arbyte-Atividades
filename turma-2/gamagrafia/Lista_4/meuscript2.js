//Escreva um programa que passe por todos os números de 1 a 50
//imprima na tela se o número é par ou ímpar
//Caso o númerotambém seja primo, o programa deve dizer que ele é primo. (um número primo é umnúmero que só é divisível por ele mesmo e por 1)

let contador=0
let limite=50

while(contador<= limite){
    if (contador%2===0){
        console.log(`O número ${contador} é PAR`)
    } else {
        console.log(`O número ${contador} é IMPAR`)
    } 
    contador++
}