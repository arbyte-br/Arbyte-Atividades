let rs=require('readline-sync');

let palavra=rs.question('Insira uma palavra: ');
let caracter= palavra.length;
// console.log(caracter);
let result="";
while (caracter>=0)
{
let x= caracter-1
console.log(palavra.charAt(x));
let letra=palavra.charAt(x)
result =result+letra;
caracter=caracter-1
}
console.log(result);
