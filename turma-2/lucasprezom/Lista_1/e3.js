let rs = require ('readline-sync')

let senha = rs.questionInt ('Coloque a senha:\n')

if (senha === 1234) {
    console.log ('acesso permitido!')
} else {
    console.log ('acesso negado!')
} 