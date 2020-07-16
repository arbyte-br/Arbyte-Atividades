var rs = require('readline-sync');

var pergunta = rs.questionFloat('Digite um valor para convertê-lo em graus celcius ou fahrenheit. Valor: ');
var pergunta2 = rs.question('Escolha c para Celcius ou f Fahrenheit: ');

var contaF = (pergunta * 9/5) + 32;
var contaC = (pergunta - 32) * (5/9);

if(pergunta2.toUpperCase == 'C'){
    console.log(`${pergunta} ºF em celcius é igual a: ${contaC.toFixed(2)} ºC.`);
}else{
    console.log(`${pergunta} ºC em fahrenheit é igual a: ${contaF.toFixed(2)} ºF.`);
}