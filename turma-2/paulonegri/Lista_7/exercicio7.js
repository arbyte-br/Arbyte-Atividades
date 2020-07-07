/*Escreva uma aplicação em JS que receba dois usuários. De cada
usuário, a aplicação deve receber um número de 1 a 100. A aplicação deve informar se
algum dos usuários informou o número correto. (Você pode escolher qual vai ser o
número correto)*/

let rs = require(`readline-sync`)
let primeiroJogador = rs.question(`Informe o nome do primeiro jogador: `)
let segundoJogador = rs.question(`Informe o nome do segundo jogador: `)
console.clear()

let primeiroNumero = -1
while (primeiroNumero < 0 || primeiroNumero > 100) {
    primeiroNumero = rs.questionInt(`Digite um numero de o a 100: `)
}

let segundoNumero = -1
while (segundoNumero < 0 || segundoNumero > 100) {
    segundoNumero = rs.questionInt(`Digite outro numero de 0 a 100: `)
}

let numerocorreto = 94
function numeroCorreto(){
    if(primeiroNumero === numerocorreto){
        return `Parabens ${primeiroJogador}!!\nVoce acertou o numero de 0 a 100!`
    }else if(segundoNumero === numerocorreto){
        return `Parabens ${segundoJogador}!!\nVoce acertou o numero de 0 a 100!`
    }else{
        return `Ninguem acertou o numero correto`
    }
}

console.log(numeroCorreto())
    


