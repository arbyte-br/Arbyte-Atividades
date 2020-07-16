var rs = require('readline-sync');
var DateDiff = require('date-diff');

var hoje = new Date(2020, 7, 9);

let jogador1 = {
    nome: rs.question("Jogador 1, qual eh o seu nome?\n"),
    nascimento: new Date(rs.question("Qual sua data de nascimento? (ex:MM/DD/AAAA) \n")),
    idade: 0
}

let jogador2 = {
    nome:rs.question("Jogador 2, qual eh o seu nome?\n"),
    nascimento: new Date(rs.question("Qual sua data de nascimento? (ex:MM/DD/AAAA) \n")),
    idade: 0
}

var diff = new DateDiff(hoje, jogador1.nascimento);
jogador1.idade = diff.years()

diff = new DateDiff(hoje, jogador2.nascimento);
jogador2.idade = diff.years()

console.log(jogador1.idade)

console.log(jogador2.idade)

if (jogador1.idade > jogador2.idade){
    console.log(jogador1.nome + " eh o mais velho!")
} else {
    console.log(jogador2.nome + " eh o mais velho!")
}