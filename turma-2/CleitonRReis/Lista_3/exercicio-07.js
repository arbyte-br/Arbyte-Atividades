/* 7. Faça um programa que pergunte ao usuário escolher duas opções A e B.
A encerra o programa, B é pra fazer uma soma.
a. Se o usuário inserir A o programa fecha
b. Se o usuário inserir B o programa vai realizar uma operação de soma,
solicitando dois números inteiros (n1 e n2) onde após o usuário inserir o
segundo número o algoritmo deve apresentar a soma e também pergunta se
quer realizar outro cálculo.
c. Se o usuário inserir qualquer coisa diferente de A ou B o programa deve dizer
que não entendeu o comando e solicitar novamente para inserir A ou B */

var rs = require('readline-sync');

var pergunta = rs.question('Escolha A para sair ou B para fazer uma soma: ').toUpperCase();

while(pergunta == 'B'){
      
            var n1 = rs.questionInt('Digite o primeiro número: ');
            var n2 = rs.questionInt('Digite o segundo número: ');        
            console.log(n1 + n2);             
                  
            pergunta = rs.question('Deseja continuar? A = Não / B = Sim: ').toUpperCase();

  while(pergunta != 'A' && pergunta != 'B'){
      pergunta = rs.question('Não entendi! Para continuar - B. Para sair - A:  ').toUpperCase();      
 }

}

console.log('Obrigado!');