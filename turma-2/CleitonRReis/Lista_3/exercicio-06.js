/* 6 - Faça um programa que pergunta ao usuário:
“Insira 0 para sair ou qualquer outra tecla para continuar.”
Se o usuário inserir 0 o programa encerra.
Se o usuário inserir qualquer outra coisa o programa pergunta novamente:
“Insira 0 para sair ou qualquer outro número para o continuar.”
Até o usuário sair */

var rs = require('readline-sync');

while(true){
      var pergunta = rs.question('Insira 0 para continuar e qualquer outra tecla para sair: ');
      if(pergunta == '0'){
            continue;
      }else{
            break;
      }
}

console.log('Obrigado!');