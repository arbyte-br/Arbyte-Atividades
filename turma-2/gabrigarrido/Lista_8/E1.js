var rs = require('readline-sync');

var xicara = new Object ();

var corAtual = rs.question("Qual a cor atual? \n")

xicara.cheia = true;
xicara.cor = corAtual;

console.log(xicara);