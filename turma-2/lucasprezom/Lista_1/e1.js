let rs = require ('readline-sync')

let usuarioAno = rs.questionInt ('Diga o ano em que você nasceu:\n')
let ano = 2004
if (usuarioAno <= ano) {
    console.log ('Você pode votar!')
} else {
    console.log ('Ainda não pode votar')
}

