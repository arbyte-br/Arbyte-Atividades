let readline = require("readline-sync")

let Senha = readline.questionInt("Insira sua senha ")

if (Senha == 1234){

    console.log("Acesso Permetido")

} else {

    console.log("Acesso Negado")
}