// ​Faça um programa que pergunta ao usuário :“Insira 0 para sair ou qualquer outra tecla para o 
//continuar.”Se o usuário inserir 0 o programa encerra.Se o usuário inserir qualquer outra coisa
//o programa pergunta novamente :“Insira 0 para sair ou qualquer outro número para o continuar.
//”Até o usuário sair

let rs = require("readline-sync")
let perguntaUsuario = rs.question(" Insira 0 para sair ou qualquer outra tecla para continuar.")

while(perguntaUsuario !== "0"){
    perguntaUsuario = rs.question(" Insira 0 para sair ou qualquer outra tecla para continuar.")
}
