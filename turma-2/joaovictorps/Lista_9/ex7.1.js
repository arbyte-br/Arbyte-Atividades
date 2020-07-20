let rs = require('readline-sync')

function soma(...numeros) {
    let somaNumeros = 0
    for (let i = 0; i < numeros.length;i++){
        somaNumeros+= numeros[i]
    }
    return somaNumeros
}

console.log(soma(4,7,8,96,3))

/* let c = true
let somados = 0

while(c) {
    let outroNumero = rs.questionInt('Digite um numero para somar ou digite 0 para parar: ')
    if (outroNumero === 0) {
        c = false
        break
    }
    somados+= outroNumero
}
console.log(somados) 

*/