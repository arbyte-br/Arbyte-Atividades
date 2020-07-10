var rs = require('readline-sync')

var nome;
var sexo;
var idade;
var altura;
var peso;

console.log('\nPara saber se seu imc está ok, insira os dados abaixo: ');

nome = rs.question(`\nDigite seu nome: `);

sexo = rs.question('\nInforme seu sexo. M = Masculino / F = Feminino: ');

idade = rs.questionInt('\nDigite sua idade, por favor: ');

altura = rs.questionFloat(`\n${nome}, informe a sua altura, por favor: `);

peso = rs.questionFloat(`\n${nome}, informe seu peso, por favor: `);

var imc = peso / (altura * altura);

if(imc < 18.5){
    console.log(`\nATENÇÃO: MAGREZA. ${nome}, sinto muito, seu IMC é de ${imc.toFixed(2)} kg/m2 e você precisa ganhar peso!\n`);
}else if(imc < 24.9){
    console.log(`\nNORMAL. ${nome}, parabéns, seu IMC é ${imc.toFixed(2)} kg/m2 e você está dentro do peso adequado!\n`);
}else if(imc <= 30){
    console.log(`\nATENÇÃO: SOBREPESO. ${nome}, sinto muito, mas o seu IMC é de ${imc.toFixed(2)} kg/m2, por isso você está acima do peso e deveria emagrecer!\n`);
}else{
    console.log(`\nATENÇÃO: OBESIDADE. ${nome}, sinto muito, mas o seu IMC é de ${imc.toFixed(2)} kg/m2, por isso você está acima do peso e deveria emagrecer!\n`);
}