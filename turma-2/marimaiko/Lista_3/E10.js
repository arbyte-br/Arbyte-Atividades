let rs=require('readline-sync');

let numero=rs.questionInt('Insira um numero: ');
let x=0;


while (x<=numero)
{
    if (numero%x==0)
    {
        console.log(x);
    }    
    x=x+1;
}


