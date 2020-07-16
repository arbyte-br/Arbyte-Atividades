/* (OBRIGATÓRIO) Faça um programa que escreva na tela os números múltiplos de 5
entre 0 e 1000, usando um comando For. Não utilize nenhum IF/THEN neste programa,
apenas o comando For. */

let rs= require("readline-sync")

let numero

for(numero = 5; numero>0 && numero<=1000; numero = numero + 5){
    console.log(numero)
}