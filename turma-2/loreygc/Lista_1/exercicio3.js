let rs=require("readline-sync")
let senha = 1234
//pedindo a entrada para senha

let usuário=rs.questionInt("Qual é a senha? ")

if (usuário === senha){
    console.log("ACESSO PERMITIDO")
} else  {
    console.log ("ACESSO NEGADO")
}