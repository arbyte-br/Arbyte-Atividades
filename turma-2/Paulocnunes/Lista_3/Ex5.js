// (OBRIGATÓRIO) Faça um programa que pergunta ao usuário :
// “Insira 0 para sair ou qualquer outro número para o continuar.”
// Se o usuário inserir 0 o programa encerra.
// Se o usuário inserir qualquer outra coisa o programa pergunta novamente :
// “Insira 0 para sair ou qualquer outro número para o continuar.”
// Até o usuário sair

let rs = require('readline-sync')

let numeroEncerra

while (numeroEncerra !== 0) {
    numeroEncerra = rs.questionInt('Insira 0 para sair ou qualquer outro número para o continuar. ')
}   

