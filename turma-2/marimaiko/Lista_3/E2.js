let rs=require('readline-sync');

let numero1=rs.questionInt('Insira um numero: ');
let numero2=rs.questionInt('Insira outro numero: ');
let resultado=0;

while (numero2>=1)
{
    numero2=numero2-1;
    resultado=resultado +numero1 
}
console.log(resultado);