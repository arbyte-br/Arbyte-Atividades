let rs=require('readline-sync');


let x=1;
let par=0;
let impar=1;
let n=0;

while (x<=5)
{
    n=rs.questionInt('Insira um numero: ');
    n%2==0
    x=x+1;
    let condicao=n%2==0 ? par=par+n:impar=impar=impar*n
}
console.log(par)
console.log(impar)