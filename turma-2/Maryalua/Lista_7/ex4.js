//Faça uma função que recebe, por parâmetro, um valor N e calcula e
//escreve a tabuada de 1 até 9. Mostre a tabuada na forma:
//1 x N = N
//2 x N = 2N
//...
//9 x N = 9N
//Teste sua função pedindo uma entrada do usuário

let rs = require('readline-sync');

let N = rs.questionInt('insira um número:')

function tabuadaDoNove(x) {
    for (let index = 1; index <= 9; index++) {
        Numero = x * index
        console.log(index + 'x' + x + '=' + Numero)
    }
} tabuadaDoNove(N)