// Faça uma função que recebe por parâmetro o raio de uma esfera e
// calcula o seu volume (v = 4/3.pi.R 3 ).
// Então solicite ao usuário o raio da esfera e utilize a função para exibir o resultado.

let rs = require('readline-sync');

function volume(R) 
{
    return 4/3*Math.PI*Math.pow(R,3)
}
let raio =rs.questionInt('Dê um raio: ');
console.log(volume(raio));