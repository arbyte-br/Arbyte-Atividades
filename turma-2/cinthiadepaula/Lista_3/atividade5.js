let rs = require ('readline-sync');

let numero = rs.questionInt('Insira 0 para sair ou qualquer outra tecla para continuar ');

CONT = 0;   
while (CONT !== numero){
    let numero = rs.questionInt('Insira 0 para sair ou qualquer outra tecla para continuar ');
    CONT ++;
  
}


