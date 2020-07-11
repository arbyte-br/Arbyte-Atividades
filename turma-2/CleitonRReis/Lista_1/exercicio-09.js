var rs = require('readline-sync')

var pergunta = 0;
var lado1 = 0;
var lado2 = 0;
var lado3 = 0;

console.log('Informe os dados abaixo para saber se o triângulo é: retângulo, obtusângulo ou acutângulo.')

var lado1 = rs.questionFloat('Informe o primero ângulo do triângulo: ');
var lado2 = rs.questionFloat('Informe o segundo ângulo do triângulo: ');
var lado3 = rs.questionFloat('Informe o terceiro ângulo do triângulo: ');

if(lado1 < (lado2+lado3) && lado2 < (lado1+lado3) && lado3 < (lado1+lado2)){

if(lado1 == 90 || lado2 == 90 || lado3 == 90){ // Se tiver qualquer um dos ângulos retos, então é retangulo.
    console.log('Esse é um triângulo retângulo!')
}else if(lado1 > 90 || lado2 > 90 || lado3 > 90){
    console.log('Esse é um triângulo obtusângulo!')
}else{
    console.log('Esse é um triângulo acutângulo!')
}
}
else{
    console.log('Não é um triângulo!')
}