var readline = require('readline-sync')

var jog1 = readline.question('Digite o nome do jogador 1: ')
var jog2 = readline.question('Digite o nome do jogador 2: ')

var array1 = []
var array2 = []

for (i = 0; i < 5; i++) {

    var numero = readline.questionInt(`Por favor ${jog1}, digite um numero: `)
    array1.push(numero)
}

for (i = 0; i < 5; i++) {

    var numero = readline.questionInt(`Por favor ${jog2}, digite um numero: `)
    array2.push(numero)
}

for (i = 0; i < 5; i++) {

    var elemento = array1[i]
    if (array2.includes(elemento)) {} else {
        array2.push(elemento)
    }
}

console.log(`Os números digitados são: ${array2.join(',')}`)