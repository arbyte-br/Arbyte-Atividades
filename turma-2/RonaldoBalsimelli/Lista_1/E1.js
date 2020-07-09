/*(OBRIGATÓRIO) Escreva um programa para ler o ano de nascimento de uma pessoa e
escrever uma mensagem que diga se ela poderá ou não votar este ano (não é
necessário considerar o mês em que ela nasceu).*/

let rs = require ("readline-sync")

console.log("Saiba se você pode votar este ano!")
let ano = rs.questionInt("Qual o seu ano de nascimento? (Com 4 dígitos) \n")

let idade = 2020 - ano

    if ((idade >= 16 && idade < 18) || idade >= 70) 
{
    console.log("Se quise ja pode votar! Mas não é obrigatório!")

} 
    else if (idade >= 18  && idade < 70)

{
    console.log ("Você é elegivel para votar, não esqueça que é OBRIGATÓRIO!")

}   
    
    else {
    console.log("Você ainda não possui idade para votar.")
    
}
