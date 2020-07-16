var rs = require('readline-sync');

var numero = rs.questionInt('Digite um numero: ');
var par = Number(2, 4, 6, 8, 10);
var impar = Number(1, 3, 5, 7, 9, 11);

if(numero === par){
    console.log(`${par} ` + 'PAR');
}else{
    console.log(`${numero} ` + 'IMPAR');
}