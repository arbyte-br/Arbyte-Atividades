// Faça uma função que recebe, por parâmetro, um valor N e calcula e
// escreve a tabuada de 1 até 9. Mostre a tabuada na forma:
// 1 x N = N
// 2 x N = 2N
// ...
// 9 x N = 9N
// Teste sua função pedindo uma entrada do usuário

let rs = require('readline-sync');

function tabuada(N) 
{
    for (let i = 1; i <= 9; i++) {
        
        console.log(`${i}*${N} = ${i*N}`);
    }
    return
}
let number = rs.questionInt('Digite um numero: ');
tabuada(number);
