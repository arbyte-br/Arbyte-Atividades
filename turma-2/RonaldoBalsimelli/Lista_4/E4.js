/* (OBRIGATÓRIO) Escreva um programa que calcule a soma de todos os múltiplos de 3
e de 5 entre 1 e 1000.*/

let valor1 = 0
let valor2 = 1000
let multiplo = 0

while(valor1 <= valor2){
    if (valor1 % 3 == 0 && valor1 % 5 == 0){
        multiplo = multiplo + valor1
}
    valor1++
}
console.log(multiplo)

/* Não sei se isso ta certo, não fiz a conta, rsrs*/
