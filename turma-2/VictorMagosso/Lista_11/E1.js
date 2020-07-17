let rs = require('readline-sync')

const soma = (a, b) => console.log(a+b);

soma(a = rs.questionFloat('Digite o valor 1: '), b = rs.questionFloat('Digite o valor 2: '))

