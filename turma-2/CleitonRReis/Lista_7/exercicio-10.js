/*
10.Faça uma função que recebe a idade de uma pessoa em anos, meses e dias e retorna essa idade expressa em 
dias. Solicite a data ao usuário e o algoritmo imprime a quantidade de dias como resultado utilizando a função criada.
*/

const rs = require('readline-sync');

let anos = rs.questionInt('Informe a sua idade em anos: ');

let meses = rs.questionInt('Informe a sua idade em meses: ');

let dias = rs.questionInt('Agora informe a sua idade em dias: ');

let diasTotais = anos * 365 + meses * 30 + dias;

function idadeEmDias(){
    console.log(`Sua idade em dias é:  ${diasTotais}.`);
}
idadeEmDias();