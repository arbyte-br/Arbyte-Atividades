let isOdd = require('is-odd');
let rs = require('readline-sync');

let num = rs.question('Digite um numero: ')

if(isOdd(num)){
    console.log(' IMPAR!!');
}
else{
    console.log(' PAR!!');
}



