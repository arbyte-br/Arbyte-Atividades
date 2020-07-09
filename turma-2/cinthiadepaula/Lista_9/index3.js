let rs = require('readline-sync');
const isOdd = require('is-odd');
 
let numero = rs.questionInt('insita um numero: ')
let numero2 = (isOdd(numero)); //=> true

if(numero2 == true){
    console.log(`${numero} eh impar `)
}
 
else{console.log(`${numero} eh par `);}
