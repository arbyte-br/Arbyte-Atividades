let rs = require ('readline-sync');

let numero = rs.questionInt('Quantas macas vai comprar? ')

maca = 0.30;
maca2 = 0.25;

if(numero < 12){
    console.log (numero*maca)
}
else console.log (numero*maca2)