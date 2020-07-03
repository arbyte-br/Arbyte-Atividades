let rs = require('readline-sync')

var par = rs.question('Digite um numero: ')

if (par % 2 === 0 ) {
    console.log("PAR")
}else{
    console.log("IMPAR")
}
