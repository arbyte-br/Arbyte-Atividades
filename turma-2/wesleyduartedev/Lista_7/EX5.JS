//(OBRIGATÓRIO) Escreva uma função que recebe dois parâmetros numéricos e retorne
// menor número.
//Solicite dois números para o usuário e forneça como argumento para esta função.
//Escreva o resultado da função na tela dizendo qual menor número.

let rs=require('readline-sync');

let numero1=rs.question('Insira o numero 1 : ');
let numero2=rs.question('Insira o numero 2 : ');



 function retornamenor (numero1,numero2) {
     if (numero1 < numero2){
           console.log('Numero 1 é menor: ' +numero1 );
          }
           else if(numero2 < numero1) {
            console.log('Numero 2 é menor: ' +numero2 );
           }
            else if (numero1 === numero2){
            console.log('Os dois numeros são iguais: '+ numero1+" e "+ numero2)
            }
        return retornamenor;
          
     }

     
    

 console.log(retornamenor(numero1,numero2));