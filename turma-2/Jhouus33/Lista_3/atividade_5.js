let rs = require('readline-sync')

for ( let respostaUsuario; respostaUsuario !== 0; respostaUsuario) {
    respostaUsuario = rs.questionInt ('Digite 0 para sair ou qualque número para continuar: \n')   
}
