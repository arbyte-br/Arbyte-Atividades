//(OBRIGATÓRIO) Faça um algoritmo que receba o nome de dois jogadores e após isso
//peça 5 números de 1 a 10 para cada jogador. Primeiro para o jogador A e depois para o
//jogador B.
//Após a escolha de cada jogador o algoritmo deve apresentar quais foram os números
//que apenas o jogador A e B colocou sem repetir nenhum número
//EX: Jogador A : 1, 2, 3, 4, 5
//Jogador B : 1,2,3,8,7
//Algoritmo imprime :
//1,2,3,4,5,7,8

var  readlineSync = require('readline-sync');



var jogadorA =[];
var jogadorB =[];
let contadorA= 0
let contadorB= 0
let i= 0
let comparacao =[]

  
            console.log('numeros de jogador A ---------------');
  for(contadorA ; contadorA <5 ;  contadorA  ++){
       let numero1 = readlineSync.questionInt('Insira um numero jogador A de 1 a 5: ');
       jogadorA.push(numero1); 
    }  
          console.log('numeros de jogador B ---------------');
       for(contadorB ; contadorB <5;  contadorB  ++){
        let numero2 = readlineSync.questionInt('Insira um numero jogador B de 1 a 5: ');
        jogadorB.push(numero2);

       
       }  
          console.log('numero de jogador A :',jogadorA );
          console.log('numero de jogador B :',jogadorB );
   
          for ( i = 0; i<9 ; i++){
             if(!comparacao.includes(jogadorA[i])) comparacao.push (jogadorA[i]);
             if(!comparacao.includes(jogadorB[i])) comparacao.push (jogadorB[i]);

              
             }
          
          console.log(`Os numeros que os jogadores A e B colocaram sem repetir são :  ${comparacao} `);
           console.log(comparacao.sort());

          //que apenas o jogador A e B colocou sem repetir nenhum número
          //EX: Jogador A : 1, 2, 3, 4, 5
         //Jogador B : 1,2,3,8,7
         //Algoritmo imprime :
          //1,2,3,4,5,7,8