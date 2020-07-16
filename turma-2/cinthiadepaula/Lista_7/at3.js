let rs = require('readline-sync')

let dia = rs.questionInt('digite o dia do seu aniversario \n');
let mes = rs.questionInt('digite o mes do seu aniversario \n');
let ano = rs.questionInt('digite o ano do seu aniversario \n');

function calculando(dia, mes, ano) {


    mes = mes * 30;
    anonovo = 2020 - ano;
    anodias = anonovo * 365;


    return dia + mes + anodias;

}

let resultado = calculando(dia, mes, ano);
console.log(resultado);