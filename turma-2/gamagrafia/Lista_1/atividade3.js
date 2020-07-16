let rs=require('readline-sync')

let senha=rs.questionInt('Qual a senha?')

let senhaVálida= 1234

if(senha !== senhaVálida){
    console.log ("ACESSO NEGADO")
} else {
    console.log ("ACESSO PERMITIDO")
}