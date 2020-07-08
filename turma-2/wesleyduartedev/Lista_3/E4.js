//(OBRIGATÓRIO) Faça um programa que recebe um número e imprima todos os
/////números pares de 0 até o número inserido.
///Ex: usuário inseriu 8
///O programa imprime
//0
//2
//4
//6
//8

let rs = require('readline-sync');
let numero1 = rs.questionInt('Insira o numero:');



let soma =0;
 let i =0;
   for  ( i=2 ; i<=numero1 ; i= i+2) {
      console.log( "Numeros pares" , i);
       soma =soma+i;   
       }

     
     