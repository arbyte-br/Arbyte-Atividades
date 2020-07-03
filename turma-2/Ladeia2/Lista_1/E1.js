let rs = require('readline-sync')

var idade = rs.question('Digite sua idade: ')

if (idade >= 16) {
    console.log("Você pode votar")
}else{
    console.log("Você não pode votar")
}
