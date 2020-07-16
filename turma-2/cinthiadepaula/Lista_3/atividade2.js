let rs = require ('readline-sync');

let num = rs.questionInt('\n Digite um numero ');
let num2 = rs.questionInt('\n Digite outro numero ');

resultado = 0;
CONT = 0;   
while (CONT < num2){
   resultado = resultado + num;
   
    CONT ++;
 
}

console.log('\n o resultado a multiplicacao é: '+ resultado);