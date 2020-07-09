let rs = require('readline-sync');
const isPrime = require('prime-number')
 

let numero = rs.questionInt('insira um numero: ')


let numero2 = (isPrime(numero)) // true



if(numero2 == true){
    console.log(`${numero} eh primo `)
}
 
else{console.log(`${numero} nao eh primo `);}