let rs = require("readline-sync")

console.log("====================== PRIMEIRA TENTATIVA ======================")

let usuario1 = rs.question("Digite um usuário: ")

let n1 = rs.questionInt("Acerte o número correto de 1 a 100: ")

console.log("====================== SEGUNDA TENTATIVA ======================")

let usuario2 = rs.question("Digite um segundo usuário: ")

let n2 = rs.questionInt("Acerte o número correto de 1 a 100: ")

let numeroCerto = 46

if (n1 !== numeroCerto && n2 !== numeroCerto) {
    console.log("Os dois erraram")
    
}

if (n1 === numeroCerto) {
    console.log(`Parabéns ${usuario1}, você acertou o número.`)
} else {
    console.log(`Número incorreto ${usuario1}.`)
}

if (n2 === numeroCerto) {
    console.log(`Parabéns ${usuario2}, você acertou o número.`)
} else{
    console.log(`Número incorreto ${usuario2}.`)
}



