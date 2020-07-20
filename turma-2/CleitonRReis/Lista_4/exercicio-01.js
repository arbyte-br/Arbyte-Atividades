/*
1. Faça um algoritmo que receba uma entrada do usuário e caso encontre a letra a
transforme ela em maiúscula
EX: abelha
O algoritmo imprime
AbelhA
Dicas para esta atividade.
Para selecionar 1 caracter da string utilizamos a função charAt :
var nome = “oi”
console.log(nome.charAt(0))
console.log(nome.charAt(1))
O algoritmo imprime:
> o
> i
O número que colocamos dentro de charAt é a posição do caractere que queremos da
string, porém o primeiro elemento é 0 e não 1.
Sendo assim uma string de 2 elementos possui o elemento 0 e 1.
Para cada charAt você deve concatenar isto numa string separada e exibir ela no final
*/

var rs = require('readline-sync');

// var palavra = rs.question('Insira uma palavra: ');

// var palavraModificada = '';

// for(var i = 0; i < palavra.length; i++){
    
//     if(palavra.charAt(i) == "a"){
//       palavraModificada = palavraModificada + palavra.charAt(i).toUpperCase();
//     }else{
//       palavraModificada = palavraModificada + palavra.charAt(i);
//     }
// }

// console.log(palavraModificada);

// var rs = require('readline-sync');

// var frase = rs.question("Digite uma frase ou palavra: ").toLowerCase();

// var palavra = frase.split("");

// console.log(palavra);

// for (var i = 0; i < frase.length ; i++){
//     if(frase.charAt(i) == "a" || frase.charAt(i) == "e" || frase.charAt(i) == "i" || frase.charAt(i) == "o" || frase.charAt(i) == "u"){ 
        
//         palavra[i] = frase.charAt(i).toUpperCase();
//      }
// }
//     console.log(palavra.join(''));

var userText = rs.question("Digite uma frase ou palavra: ").toLowerCase();

var tamanho = userText.length;

for(var i = 0; i < tamanho; i++){
    if(userText.charAt(i) === 'a' || userText.charAt(i) === 'e' || userText.charAt(i) === 'i' || userText.charAt(i) === 'o' || userText.charAt(i) === 'u'){
        console.log(userText.charAt(i).toUpperCase());
    }else{
        console.log(userText.charAt(i));
    }

}