let rs = require('readline-sync');

let numero = Number(rs.question('Insira um numero: '));

if (numero % 2 == 0) {
    console.log('PAR');
} else{
    console.log('IMPAR');
}