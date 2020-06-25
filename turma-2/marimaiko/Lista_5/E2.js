let rs = require('readline-sync');

let n1 = rs.questionInt('Insira um numero: ');
let n2 = rs.questionInt('Insira outro numero: ');
let x =n2-n1;

for (let i=0; i<=x; i++) 
{
    console.log(n1); 
    n1=n1+1;
}
