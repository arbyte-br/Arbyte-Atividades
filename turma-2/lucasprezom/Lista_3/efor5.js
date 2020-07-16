let rs = require('readline-sync')

let respostaUsuario
for (respostaUsuario; respostaUsuario !== 0;) {
    respostaUsuario = rs.questionInt (console.log('Insira 0 para sair ou qualquer outro número para o continuar.'))
}
