var rs = require('readline-sync');

var xicara = {}

var estaCheia = rs.keyInYN("A xicara está cheia? \n")
var corAtual = rs.questionInt("Qual a cor atual? \n")

xicara.cheia = estaCheia;
xicara.cor = corAtual;

console.log(xicara);