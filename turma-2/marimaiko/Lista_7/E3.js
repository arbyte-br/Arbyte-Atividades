// Faça uma função que recebe a idade de uma pessoa em anos,
// meses e dias e retorna essa idade expressa em dias.
// Solicite a data ao usuário e o algoritmo imprime a quantidade de dias como resultado
// utilizando a função criada.

let rs = require('readline-sync');

function idade(ano,mes,dia) 
{
    ano=ano*365;
    mes=mes*30;
    resultado= ano+mes+dia;
    return resultado;
}

let a = rs.questionInt('Digite o ano: ')
let m = rs.questionInt('Digite o mes: ')
let d = rs.questionInt('Digite o dia: ')

console.log(`A idade expressa em dias é de ${idade(a,m,d)}`)
