let rs=require('readline-sync');

let palavra=rs.question('Insira uma palavra: ');
let caracter= palavra.length;
let x=0;

while (caracter>=0)
{
console.log(palavra.charAt(x)); 
x= x+1;
caracter=caracter-1;
}
