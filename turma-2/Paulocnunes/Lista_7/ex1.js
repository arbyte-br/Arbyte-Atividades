//Faça uma função que recebe por parâmetro o raio de uma esfera e
//calcula o seu volume (v = 4/3.pi.R³).
//Então solicite ao usuário o raio da esfera e utilize a função para exibir o resultado.

let rs = require('readline-sync')

function calcularVolume(raio) {
    let volume = 0
    raio = rs.questionInt('Digite o valor do raio da esfera que deseja saber o volume: \n');
    volume = (4 / 3 * 3.14 * (raio*raio*raio))
    return volume
}

console.log(calcularVolume())

