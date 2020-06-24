let rs=require('readline-sync');

let x=1;
let soma=0;

while (x<=15)
{
    let n=rs.questionInt('Insira um numero: ');
    soma=soma+n;
    x=x+1;
}
media=soma/15;
console.log(media)