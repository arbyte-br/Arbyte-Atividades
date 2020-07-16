   //OBRIGATÓRIO) Crie um programa que receba uma palavra e exiba quantas
   //consoantes e vogais essa palavra tem.
   //EX : saúde
   //2 consoantes
  //3 vogais

 
 

  var  readlineSync = require('readline-sync');


palavra = [];
var vogal = ['a','e','i','o','u','ú' ];
let i= 0
let comparacao =[]
var tamanhopalavra = palavra.length
resultado ='';
let index = 0 ;

 let numero1 = readlineSync.questionInt('Insira a palavra: ');
palavra.push(comparacao); 
        
  for(i ; i <tamanhopalavra;  i++){
       let caracter = palavra[i];
       let contemVogal = palavra[index](caracter) > -1;

       console.log(caracter);
       caracter = resultado;
    


    //if (comparacao = vogal){
        
       // console.log("Numero de vogais: " , caracter[i]);

      // }

       //else if (contemV){
        //console.log("Numero de consoantes: " , caracter.length());



 //}
  
 }

    


    


        
   
    