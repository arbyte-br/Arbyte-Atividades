// ## Importação da Bilbioteca Readline-Sync
let rs = require('readline-sync');
// ## Codigo JS
let pergunta = rs.questionInt('Insira um numero: ');
let mensagem = String('BIP BIP');
let numero = 0;

while(pergunta > numero){
    console.log(mensagem);
    numero =(numero + 1);
}


