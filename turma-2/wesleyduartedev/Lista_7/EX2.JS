//(OBRIGATÓRIO) Faça uma função que recebe por parâmetro um valor inteiro e positivo
//e retorna o valor lógico Verdadeiro caso o valor seja primo e Falso em caso contrário.
//Solicite ao usuário o número e no final imprima se é primo ou não utilizando a função na
//condição IF.

let rs=require('readline-sync');

let numero=rs.question('Insira um numero: ');
 

  function Éprimo (numero) {
       
      if (numero % 2 === 0){
           console.log (numero+ " : É PRIMO ");
             }

           else if (console.log( numero + ": Numero não é primo")) {

           return ;
           
      }

  }

 

console.log(Éprimo(numero));
