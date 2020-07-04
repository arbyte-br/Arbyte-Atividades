//(OBRIGATÓRIO) Faça um algoritmo que receba uma palavra e imprima ela ao
//contrário.
///EX: usuário informou BANANA
//Algoritmo imprime:
//ANANAB


let rs=require('readline-sync');

let palavra=rs.question('Insira uma palavra: ');
let caracter= palavra.length;
let result="";
     
while (caracter>=0)
{
   let letra=palavra.charAt(caracter);
   result =result+letra;
   caracter=caracter-1
} 
console.log(result);
  
  

  
  

 