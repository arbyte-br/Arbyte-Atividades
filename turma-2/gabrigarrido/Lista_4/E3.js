var rs = require("readline-sync")
var numero = rs.questionInt("Digite um número");

var i = 0;
var caracter = '*'


while(i < numero){
    console.log(caracter)
    caracter = caracter + '*';
    i++;
}