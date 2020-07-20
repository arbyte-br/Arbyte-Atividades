let rs = require ("readline-sync")
const isOdd = require('is-odd');


let numero = rs.questionInt("Digite um numero\n>>")
let resposta = isOdd(numero)

if(resposta === true){
    console.log("Numero e impar")
}
else{
    console.log("Numero e par")
}
