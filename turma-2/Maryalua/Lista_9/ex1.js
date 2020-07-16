//Faça uma programa que receba 4 notas e calcule a mediana e
//apresente ao usuário o resultado.
//Utilize o pacote : ​ https://www.npmjs.com/package/median

let rs = require('readline-sync');
let mediana = require('median');
let notas2 = [];


for (let contador = 0; contador < 4; contador++) {
    let notas = rs.questionInt('Insira sua nota:');
    notas2.push(notas);
}
let resultadoMediana = mediana(notas2)
console.log('O valor da mediana é:'+ resultadoMediana)