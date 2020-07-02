let rs = require('readline-sync');

function menor(n1, n2)
{
    if(n1<n2)
    {
        console.log(`O numero menor é ${n1}`);
    }
    else{
        console.log(`O numero menor é ${n2}`);
    }
    return;
}

let num1 = rs.question('Digite um numero: ');
let num2 = rs.question('Digite outro numero: ');
menor(num1, num2);