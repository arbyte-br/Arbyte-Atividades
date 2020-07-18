/*
1. (OBRIGATÓRIO) Escreva um programa que pedirá para o usuário dois números entre 1
e 100. O programa deve, então, iterar de um em um do menor pro maior, sempre
imprimindo o número na tela do usuário. Entretanto, caso o número seja divisível por 7,
o programa deve ao invés disso imprimir a palavra “Ping”. Caso o número seja divisível
por 5, o programa deve imprimir “Pong”. Caso o número seja divisível por 7 e 5, o
programa deveria imprimir a mensagem “Ping Pong”. Dica: Neste exercício vocês talvez
precisem fazer uso do recurso “user.questionInt()” que transforma o conteúdo de um
input do usuário de string para inteiro.
*/

const rs = require('readline-sync');
var num = rs.questionInt('Digite um número entre 1 e 100: ');
var num2 = rs.questionInt('Digite outo número entre 1 e 100: ');
if ((num >= 1 && num <= 100) && (num2 >= 1 && num2 <= 100)) {
  console.log('números entre 1 e 100');
  var cont = 0;
  var maior = 0;
  if (num > num2) {
    cont = num2;
    maior = num;
  } else {
    cont = num;
    maior = num2;
  }
  while (cont <= maior) {
    if( (cont % 7 == 0) && (cont % 5 == 0) ) {
      console.log("Ping Pong");    
    }else if (cont % 7 == 0) {
      console.log("Ping");
    }else if(cont % 5 == 0) {
      console.log("Pong");
    }else {
      console.log(cont);
    }
    cont++;
  }
} else {
  console.log('Numeros inválidos, digite números entre 1 e 100');
}