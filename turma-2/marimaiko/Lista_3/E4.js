let rs=require('readline-sync');

let numero=rs.questionInt('Insira um numero: ');
let result=0;

while (result<=numero)
{
console.log(result);
result=result+2;
}