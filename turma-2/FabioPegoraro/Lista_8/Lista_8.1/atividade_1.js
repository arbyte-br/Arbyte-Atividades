//Crie um programa que: 
//a. Peça o nome de 2 usuários; ok
//b. Para cada usuário, peça 1 número; ok
//c. Imprima na tela qual usuário digitou o maior número. ok
//d. Pare a execução. 
//Neste exercício, cada usuário deve ser representado por um objeto. 
//O nome e o número do usuário devem ser propriedades deste objeto. 

let rs = require("readline-sync")


let usuario1 = {
    nome: nomeUsuario1 = rs.question("Qual o seu nome Usuario1?\n"),
    numero: n1 = rs.questionInt("Digite um numero " + nomeUsuario1 + ": ")
}
let usuario2 = {
    nome: nomeUsuario2 = rs.question("Qual o seu nome Usuario2?\n"),
    numero: n2 = rs.questionInt("Digite um numero " + nomeUsuario2 + ": ") 

}

if(n1 > n2){
    console.log("O numero do " + nomeUsuario1 + " é maior" )
}else{
    console.log("O numero do " + nomeUsuario2 + " é maior" )
}
    





 