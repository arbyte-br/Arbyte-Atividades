let rs = require('readline-sync')
let numeroCorreto = 54
let nomeUsuario1 = rs.question('Digite o nome do usuário 1: \n')
let nomeUsuario2 = rs.question('Digite o nome do usuário 2: \n')
let numeroUsuario1 = rs.questionInt(`${nomeUsuario1}, digite um número de 1 a 100: \n`)
let numeroUsuario2 = rs.questionInt(`${nomeUsuario2}, digite um número de 1 a 100: \n`)
let distanciaUsuario1RespostaCorreta = 0

if (numeroUsuario1 > numeroCorreto) {
    distanciaUsuario1RespostaCorreta = numeroUsuario1 - numeroCorreto
} else {
    distanciaUsuario1RespostaCorreta = numeroCorreto - numeroUsuario1
}
let distanciaUsuario2RespostaCorreta = 0

if (numeroUsuario2 > numeroCorreto) {
    distanciaUsuario2RespostaCorreta = numeroUsuario2 - numeroCorreto
} else {
    distanciaUsuario2RespostaCorreta = numeroCorreto - numeroUsuario2
}

if (distanciaUsuario1RespostaCorreta < distanciaUsuario2RespostaCorreta) {
    console.log(`${nomeUsuario1} GANHOU, SUA RESPOSTA FOI: ${numeroUsuario1}`)
} else if (distanciaUsuario2RespostaCorreta < distanciaUsuario1RespostaCorreta) {
    console.log(`${nomeUsuario2} GANHOU, SUA RESPOSTA FOI: ${numeroUsuario2}`)
} else {
    console.log('EMPATOU PARCEIRO!')
} 