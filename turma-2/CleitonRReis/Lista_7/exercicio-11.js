/*
11.Faça uma função que recebe, por parâmetro, um valor N e calcula e escreve 
a tabuadade 1 até 9. Mostre a tabuada na forma:1 x N = N2 x N = 2N...9 x N = 9N.

Teste sua função pedindo uma entrada do usuário
*/

const rs = require('readline-sync');

let n1 = rs.questionInt('\nInforme um número para saber a tabuada dele: ');


console.log(`\nA TABUADA de ${n1} é: \n`)

function tabuada(){
    for(let i = 1; i <= 9; i++){
        let tab = n1 * i;
        console.log(`${n1} x ${i} = ${tab}`);
    }
}

tabuada();
console.log('\n');