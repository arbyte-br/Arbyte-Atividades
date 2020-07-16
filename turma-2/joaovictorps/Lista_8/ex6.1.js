let rs = require('readline-sync')
function pegaNumeros() {
    let numerosUsuario = []
    for ( let i = 1; i <= 3; i++) {
        let numero = rs.questionInt(`Digite o ${i}° numero:  `)
        numerosUsuario.push(numero)
    }
    return numerosUsuario
}

function maiorNumero1() {
    if (usuario1.numeros[0] > usuario1.numeros[1] && usuario1.numeros[0] > usuario1.numeros[2]) {
        return usuario1.numeros[0]
    } else if (usuario1.numeros[1] > usuario1.numeros[0] && usuario1.numeros[1] > usuario1.numeros[2]) {
        return usuario1.numeros[1]
    } else if (usuario1.numeros[2] > usuario1.numeros[0] && usuario1.numeros[2] > usuario1.numeros[1]) {
        return usuario1.numeros[2]
    } else if (usuario1.numeros[0] == usuario1.numeros[1] || usuario1.numeros[0] == usuario1.numeros[2] ){
        return usuario1.numeros[0]
    } else {
        return usuario1.numeros[2]
    }
}

function maiorNumero2() {
    if (usuario2.numeros[0] > usuario2.numeros[1] && usuario2.numeros[0] > usuario2.numeros[2]) {
        return usuario2.numeros[0]
    } else if (usuario2.numeros[1] > usuario2.numeros[0] && usuario2.numeros[1] > usuario2.numeros[2]) {
        return usuario2.numeros[1]
    } else if (usuario2.numeros[2] > usuario2.numeros[0] && usuario2.numeros[2] > usuario2.numeros[1]) {
        return usuario2.numeros[2]
    } else if (usuario2.numeros[0] == usuario2.numeros[1] || usuario2.numeros[0] == usuario2.numeros[2]) {
        return usuario2.numeros[0]
    } else {
        return usuario2.numeros[2]
    }
}
let usuario1 = {
    nome: rs.question('Qual seu nome ? \n >'),
    numeros: pegaNumeros()
}



let usuario2 = {
    nome: rs.question('Qual seu nome ? \n >'),
    numeros: pegaNumeros()
}

if (maiorNumero1() == maiorNumero2()) {
    console.log(`Os maiores números de ${usuario1.nome} e ${usuario2.nome} são iguais. 
    \nAmbos digitaram ${maiorNumero1()}`)
} else {
    console.log(maiorNumero1() > maiorNumero2() 
        ? `${usuario1.nome} digitou o maior número, digitou ${maiorNumero1()}.`
        : `${usuario2.nome} digitou o maior número, digitou ${maiorNumero2()}.` )
}