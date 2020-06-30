let rs = require ('readline-sync')

console.log('Olá, usuário!')

let respostaUsuario
while (respostaUsuario !== 0) {
    console.log("Insira 0 para sair ou qualquer outro número para o continuar.")
    respostaUsuario = rs.questionInt('')
}

