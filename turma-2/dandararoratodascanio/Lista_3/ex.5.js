//atividade 5

let rs = require('readline-sync')

let numero = rs.question("Insira 0 para sair ou qualquer tecla para continuar: \n")

while ( numero !== 0) {
   numero = rs.questionInt("Insira 0 para sair ou qualquer tecla para continuar: \n")
} 