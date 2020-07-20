const readline = require('readline-sync');

let senha = readline.question('Insira uma senha valida: ');

const password = 1234;

if (senha == password){
    console.log(`ACESSO PERMITIDO!`);
}else{
    console.log(`ACESSO NEGADO!`);
}