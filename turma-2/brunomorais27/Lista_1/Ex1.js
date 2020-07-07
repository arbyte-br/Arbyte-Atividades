let rs = require ("readline-sync")

console.log("Saiba se você pode votar este ano!")
let ano = rs.questionInt("Qual o seu ano de nascimento? (Completo!) \n")

let idade = 2020 - ano

if ((idade >= 16 && idade < 18) || idade >= 70) 
{
    console.log("Seu voto é opcional!")
} else if (idade >= 18  && idade < 70)
{
    console.log ("Seu voto é obrigatório este ano!")
}else {
    console.log("Você ainda não possui idade para votar este ano.")
}