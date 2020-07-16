// ## Importação de bibliotecas ##
let readlineSync = require('readline-sync'); // Biblioteca para recebimento de dados pelo usuário.

// ## Código ##

let num = readlineSync.question('Insira um numero: ');
let num2 = readlineSync.question('Insira outro numero: ');

if(num < num2){
    for (num; num <= num2; num++ ){
        console.log(num);
    }
}else{
    for (num2; num2<=num; num2++){
        console.log(num2);
    }
}