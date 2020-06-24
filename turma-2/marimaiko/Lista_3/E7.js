let rs=require('readline-sync');

let base=rs.questionInt('Insira valor da base: ');
let potencia=rs.questionInt('Insira valor da potencia: ');
let result=1;

while (potencia>0)
{
result= result*base;
potencia=potencia-1;
}
console.log(result);

