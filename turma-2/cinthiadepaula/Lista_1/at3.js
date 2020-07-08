let rs = require ('readline-sync');

let numero = rs.questionInt('Digite um numero: ')



if(numero == 1234){
    console.log ('ACESSO PERMITIDO')
}
else console.log ('ACESSO NEGADO')