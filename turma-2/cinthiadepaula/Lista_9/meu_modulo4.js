let rs =  require('readline-sync')

var moduloArbyte = function(){
    var numero = rs.questionInt("Digite um numero: ");
    const isPrime = require('prime-number')
    var numero2 = (isPrime(numero))

if(numero2 == true){
    console.log(`${numero} é primo `)
}
 
else{console.log(`${numero} não é primo `);}

}

exports.moduloArbyte = moduloArbyte