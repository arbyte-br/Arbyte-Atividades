// ## Importação da Biblioteca Readline-Sync
let rs = require('readline-sync');

// ## Código JS
let questao1 = rs.questionInt('Insira um numero: ');
let questao2 = rs.questionInt('Insira outro numero: ');

let numero = 0;
let resultado = 0;

while(numero < questao1){
    resultado = resultado + questao2;
    numero = (numero + 1);
    
}
console.log(resultado);