var rs = require("readline-sync");
var idade = rs.question("Por Favor, informe o ano do seu nascimento: ");

if(idade < 2004){
    console.log("Você pode votar!")
} else {
    console.log("Você não tem a idade mínima para o voto.")
}