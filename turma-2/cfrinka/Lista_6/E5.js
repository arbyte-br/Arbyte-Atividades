let rs = require('readline-sync')
let nome = rs.question('Digite um nome: ')

console.log(`A terceira letra do nome é '${nome.charAt(2)}'`)