let rs = require('readline-sync');

function tabuada(num)
{
    for(let i = 1; i <= 10; i++)
    {
        let resultado = num * i; 
        console.log(resultado);
    }
    return;
}

let numero = rs.question('Digite um numero: ');

tabuada(numero);