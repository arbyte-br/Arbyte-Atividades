/*
12. Faça um programa que receba uma palavra e diga se existe vogais ou não.
Utilize o método indexOf()
*/

const rs = require('readline-sync');

// var palavra = rs.question('Informe qualquer palavra: ');

// var word = false;

// var vogais = ['a', 'e', 'i', 'o', 'u'];//.indexOf(word);

// for (var i = 0; palavra.length; i++) {
    
//         if (word.indexOf(vogais)){// || palavra.indexOf('e') || palavra.indexOf('i') || palavra.indexOf('o') || palavra.indexOf('u')) {
//             console.log(`Essa palavra ${palavra} contém vogais.`);
//         } else {
//             console.log(`Essa palavra ${palavra} NÃO contém vogais.`);
//         }
//     }


//var word = palavra.split("");

// console.log(word);

// for (var i = 0; i < palavra.length ; i++){
//     if(palavra.indexOf(i) == "aeiou" || palavra.indexOf(i) == "aeiou" || palavra.indexOf(i) == "aeiou" || palavra.indexOf(i) == "aeiou" || palavra.indexOf(i) == "aeiou"){ 
        
//         word[i] = palvara.indexOf(i);
//         console.log(`Essa palavra contém vogais!`);
//      }else{
//         console.log(`Essa palavra NÃO contém vogais!`);
//         break;
//      }
// }

var palavra = rs.question("Digite uma palavra: ");
var word = palavra;
var letraA = word.indexOf("a");
var letraE = word.indexOf("e");
var letraI = word.indexOf("i");
var letraO = word.indexOf("o");
var letraU = word.indexOf("u");

if(letraA == -1 &&
   letraE == -1 &&
   letraI == -1 &&
   letraO == -1 &&
   letraU == -1
   ){
       console.log("Essa palavra não contém vogais.");
   }else{
       console.log("Essa palavra contém vogais.");
   }