let rs = require ("readline-sync")
const isPrime = require('prime-number');

let numero = rs.questionInt("Digite um numero\n>>")
let resposta = isPrime(numero)



if(resposta === true){
    console.log("Numero e primo")
}
else{
    console.log("Numero nao e primo")
}
