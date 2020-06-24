let rs=require('readline-sync');

let numero=rs.questionInt('Insira um numero: ');
let x=1;

while (x<=10)
{
    result=numero*x;    
    console.log(numero+'x'+x+'='+result);
        x=x+1;
}
