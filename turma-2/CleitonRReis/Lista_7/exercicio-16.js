/*
16.Faça uma função que recebe por parâmetro o raio de uma esfera e calcula o seu volume 
(v = 4/3.pi.R). Então solicite ao usuário o raio da esfera e utilize a função para exibir o resultado.
*/

const rs = require('readline-sync');

let raio = rs.questionInt('Informe o raio da esfera para saber seu volume: ');

let form = 4 * 3.14 * Math.pow(raio, 3) / 3;


function calculaRaio(){
    return form.toFixed(3);
}

let res = calculaRaio();
console.log(`O volume da sua esfera é: ${res}.`);