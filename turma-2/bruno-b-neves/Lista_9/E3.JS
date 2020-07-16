const rs = require('readline-sync');
const isOdd = require('is-odd');

let user = rs.questionInt('Digite um numero: ');

if(isOdd(user)){
 console.log('Impar');
}else {
  console.log('É par!!!')
}


