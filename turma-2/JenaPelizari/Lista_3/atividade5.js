// (OBRIGATÓRIO) ​Faça um programa que pergunta ao usuário :
// "Insira 0 para sair ou qualquer outra tecla para o continuar."
// Se o usuário inserir 0 o programa encerra.
// Se o usuário inserir qualquer outra coisa o programa pergunta novamente :
// "Insira 0 para sair ou qualquer outro número para o continuar." Até o usuário sair

let rs = require('readline-sync')

let respostaUsuario 

while (respostaUsuario !== 0) {
    respostaUsuario = rs.questionInt ('Digite 0 para sair ou qualque número para continuar: \n')
    
}
