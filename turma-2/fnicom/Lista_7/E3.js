let rs = require('readline-sync');

function idade(ano, mes, dia)
{
    ano = ano*365;
    mes = mes*30;

    resultado = ano+mes+dia;
    return resultado;
}

let a = rs.question('Digite quantos anos: ');
let m = rs.question('Digite quantos meses: ');
let d = rs.question('Digite quantos dias: ');

console.log(`Voce ja viveu ${idade(a,m,d)} dias!!`);