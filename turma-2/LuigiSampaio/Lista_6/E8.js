let rs = require('readline-sync');

let palavra = rs.question('escreva uma palavra: ');
palavra= palavra.toLowerCase();


for(let i=0; i<5; i++){
   if(palavra.indexOf('a') >-1 || palavra.indexOf('e') >-1 || palavra.indexOf('i') >-1 || palavra.indexOf('o') >-1 || palavra.indexOf('u') >-1){
       console.log('existe vogal');
       break;
   }else {
    console.log('nao existe vogal');
    break;
   }
      
}
