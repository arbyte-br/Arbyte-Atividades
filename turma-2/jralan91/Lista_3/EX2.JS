//(OBRIGATÓRIO) Criar um algoritmo que realize a multiplicação de dois números
//maiores que zero SEM usar o operador de multiplicação (*)

let rs = require('readline-sync');

let numero1 = rs.questionInt('Insira o primeiro numero:');
let numero2 = rs.questionInt('Insira o numero a ser multiplicado:');

 let res = 0;
 let i = 0;
 

while ( i <numero2 ){
      res = res +numero1;
      i = i+1;
      

     
    
}
console.log( res);
