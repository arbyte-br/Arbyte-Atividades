// (OBRIGATÓRIO) Escreva um programa para ler o ano de nascimento de uma pessoa e
// escrever uma mensagem que diga se ela poderá ou não votar este ano (não é
// necessário considerar o mês em que ela nasceu).

let rs = require ('readline-sync')

let anoInserido = rs.question('Qual o seu ano de nascimento?\n');

let anoAtual = new Date () .getFullYear() - anoInserido;

if (anoAtual > 18){
    console.log('Você pode votar!');
}
else if(anoAtual === 18){
    console.log('Você poderá votar a partir deste ano!');
} 
else if(anoAtual >=16 ){
    console.log('>> Agora seu voto é opcional mas partir de 18 anos será obrigatório.');
}
else{
    console.log('>> Você ainda não pode votar.');
}