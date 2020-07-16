var rs = require('readline-sync')

var l1 = 0;
var l2 = 0;
var l2 = 0;

console.log('Quer saber se um triângulo é equilátero, isósceles ou escaleno? Basta inserir os dados pedidos abaixo: ');

var l1 = rs.questionFloat('Insira o tamanho do primero lado do triângulo: ');
var l2 = rs.questionFloat('Insira o tamanho do segunda lado do triângulo: ');
var l3 = rs.questionFloat('Insira o tamanha do terceiro lado do triângulo: ');

if(l1 < (l2+l3) && l2 < (l1+l3) && l3 < (l1+l2)){

if(l1 == l2 && l2 == l3){
    console.log('Esse é triângulo possui 3 lados iguais, então é equilátero.')
}else if(l1 == l2 || l1 == l3 || l3 == l2){
    console.log('Esse é um triângulo que possui, pelo menos, 2 lados iguais. Então é isósceles.')
}else{
    console.log('Esse é triângulo que possui todos os lados de tamanhos diferentes. Logo ele é um escaleno.')
}
}else{
    console.log('Não é um triângulo!')
}