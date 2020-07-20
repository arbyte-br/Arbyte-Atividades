let rs = rs.require('readline-sync');
let isOdd = require('is-odd');

let numero = rs.questionFloat('Insira um numero: ');

let impar = (isOdd(numero));

if(impar == true){
    console.log('Impar');
}else{
    console.log('Par');
}