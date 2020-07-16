let rs = require('readline-sync');

let num = rs.questionInt("Por favor informe o número: ");

if (num%2 == 0){
    console.log('O número é par');
}else{
    console.log('O numero é Impar');
}

