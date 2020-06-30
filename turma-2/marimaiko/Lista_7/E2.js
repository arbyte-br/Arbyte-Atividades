// Faça uma função que recebe por parâmetro um valor inteiro e positivo
// e retorna o valor lógico Verdadeiro caso o valor seja primo e Falso em caso contrário.
// Solicite ao usuário o número e no final imprima se é primo ou não utilizando a função na
// condição IF.

let rs = require('readline-sync');

function PrimeNumber(number) 
{
    let count=0;
    for (let i = 0; i <= number; i++) 
    {
        let condition = number%(i)=== 0      
        if (condition) 
        {
            count++;
        }
    }
    console.log(count);
   return count <= 2;
}

let num = rs.questionInt('Digite o número: ')
if (PrimeNumber(num)) 
{
    console.log('O número é primo');
}
else
{
    console.log('Não é primo');
}