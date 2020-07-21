   //OBRIGATÓRIO) Crie um programa que receba uma palavra e exiba quantas
   //consoantes e vogais essa palavra tem.
   //EX : saúde
   //2 consoantes
  //3 vogais

 
 

  var  readlineSync = require('readline-sync');


 var palavra = [];
 var vogal = ['a','e','i','o','u','ú'];
 var contemvogal;
 let i= 0
 var caracter;
var comparacao =[]
let tamanhopalavra = palavra.length
resultado ='';
let index = 0 ;

   palavra = readlineSync.question('Insira a palavra: ');
   comparacao.push(palavra); 
   palavra = palavra.split('');
   console.log(palavra);
   console.log(comparacao);
      
   for(i ; i<tamanhopalavra;  i++){
     caracter = tamanhopalavra.charAt(i);
     if (caracter(i) === vogal[i]){
      console.log(`Numero de consoantes são: ${caracter.length[i]} `);
      
     } else if (contemvogal){
      console.log(`Numero de vogais são: ${caracter.length[i]} `);
     }

     }
 
  







   //for(i ; i<tamanhopalavra;  i++){
     // let caracter = palavra[i];
      //let contemvogal = palavra[i](caracter) > -1;
      //console.log(caracter);
    //  caracter = resultado;
   //}
   //if (comparacao[i] = vogal){

    //  let caracter = palavra[i];
        
     // console.log("Numero de vogais: " , caracter.length[i]);

    //  }

    //  else if (contemV){
   //    console.log("Numero de consoantes: " , caracter.length[index]);
//


//}

 //console.log(palavra[i]);
/// console.log(resultado[i]);


    

    


    


        
   
    