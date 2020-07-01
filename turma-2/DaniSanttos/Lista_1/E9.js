let rs = require("readline-sync")

let numero = rs.questionInt('Digite um número para ver se está entre 100 e 200: ')

if (numero >= 100 && numero <= 200) {
    console.log(`Você escolheu ${numero} e o seu número está entre 100 e 200.`)
}else {
    console.log(`Você escolheu ${numero} e ele não está entre 100 e 200`)
}