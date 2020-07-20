let rs =  require('readline-sync')

var moduloArbyte = function(){
    var numero = rs.questionInt("Digite um numero: ");
    const isOdd = require('is-odd');
    let numero2 = (isOdd(numero));
if(numero2 == true){
    console.log(`${numero} é impar `)
}
 
else{console.log(`${numero} é par `);}

}

exports.moduloArbyte = moduloArbyte