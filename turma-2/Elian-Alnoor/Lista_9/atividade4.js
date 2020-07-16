let rs = require("readline-sync")

let num = rs.questionInt("Informe um número:\n")

const ehPrimo = require('prime-number')
 
ehPrimo(num) ? console.log("O número informado é PRIMO!") : console.log("O número informado não é PRIMO!")