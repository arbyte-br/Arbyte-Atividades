var rs = require('readline-sync');

var pergunta = rs.questionFloat('Digite quantos kilowats você gastou: ');

var kilowats = 1.5 * pergunta;
var desconto = (kilowats * -0.10);

console.log(`Valor sem descont: R$ ${kilowats}`);
console.log(`Valor com 10% de desconto: R$ ${desconto} Total a pagar: R$${kilowats + desconto}.`);