let rs = require ('readline-sync')

let digiteZ = rs.question ("Insira 0 para sair ou qualquer outra tecla para o continuar:\n")

if (digiteZ == 0) {
     console.log ("Você saiu")
    }

while (digiteZ !== 0) {
    
 digiteZ = rs.question ("Insira 0 para sair ou qualquer outra tecla para o continuar:\n")

}