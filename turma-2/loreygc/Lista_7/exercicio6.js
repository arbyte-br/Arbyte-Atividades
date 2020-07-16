let rs = require('readline-sync')

let usuario = rs.questionInt ('Digite um numero:\n')
    function numero(usuario) {
    if (usuario < 0 || usuario > 10) {
        console.log ('O número precisa ser entre 1 e 10')
        } else { 
        console.log ('Tudo ok!')
    }
    }
    numero(usuario)