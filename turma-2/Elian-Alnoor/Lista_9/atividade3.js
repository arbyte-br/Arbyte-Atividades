let rs = require("readline-sync")

num = rs.questionInt("Informe um número:\n")

const ehimpar = require('is-odd');

ehimpar(num) ? console.log("O número informado é impar") : console.log("O número informado é par")
