var rs = require('readline-sync')

var nome = []

nome = rs.question("Por favor informe um nome! \n");

var terceiraLetra = nome.charAt(2)

console.log("A terceira letra do seu nome é "+ terceiraLetra.toUpperCase())