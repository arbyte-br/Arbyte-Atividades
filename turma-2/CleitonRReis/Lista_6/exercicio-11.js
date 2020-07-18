/*
14. Faça um programa que receba uma string, o programa vai estar esperando uma data no
formato dd/MM/yyyy onde :
a. dd -> dia
b. mm -> mês
c. yyyy -> ano
Utilize o método match() para fazer essa validação, você deverá utilizar um expressão
regular para resolver este problema.
Caso a data esteja valida o algoritmo deve imprimir :
Entrada -> 22/05/2020
O algoritmo imprime :
Dia : 22
Mes : 05
Ano : 2020
*/

const rs = require('readline-sync');

var data = rs.question('Por favor, informe uma data qualquer: ');

let novaData = data.split('/');

let dados = ['Dia', 'Mês', 'Ano'];

for (let i = 0; i < dados.length; i++) {
    if (data.match(/\W/g)) {
        console.log(`${dados[i]}: ${novaData[i]}`);
    } else {
        console.log('Data inválida!');
        break;
    }
}