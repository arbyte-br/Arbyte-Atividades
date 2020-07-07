let rs = require ('readline-sync')


//Usuário informa as datas atual e ano de nascimento
let ano_atual = rs.questionInt("Informe o ano em que estamos: ")
console.log("Ano: " +ano_atual)

let ano = rs.questionInt("Insira o ano do seu nascimento: ")
   
let idade = ano_atual-ano
if (idade <= 16){
     console.log("Você ainda não pode votar, aguarde mais um pouco")
}   else {
     console.log("Você já pode votar, pense bem sobre suas escolhas, seu voto é muito importante para a evolução do seu país")
}


