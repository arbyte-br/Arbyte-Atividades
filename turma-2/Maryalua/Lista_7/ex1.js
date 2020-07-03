
//Faça uma função que recebe por parâmetro o raio de uma esfera e
//calcula o seu volume (v = 4/3.pi.R​ 3​ ).
//Então solicite ao usuário o raio da esfera e utilize a função para exibir o resultado.



let rs = require('readline-sync');

let raio = rs.questionInt('insira o valor do raio da esfera:')
let conta = (4 / 3 * 3, 14) * (raio * raio * raio);

function volumeEsfera(conta) {
    return conta = (4 / 3 *Math.PI) * (raio * raio * raio);

} console.log(volumeEsfera(conta))