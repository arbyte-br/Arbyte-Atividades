var rs = require('readline-sync');

var frase = new Array ();

var pergunta = rs.question("Por favor informe uma frase a ser convertida! \n");

frase.push(pergunta)

palavraChave = "bosta";
palavraCensurada = "estrume";
var vazio = ""

while(pergunta == vazio){
    console.log("Por favor, insira um texto!");
    pergunta = rs.question("Por favor informe uma frase a ser convertida! \n"); // como chamar a variavel sem ter que escrever tudo de novo?
    if(pergunta == !vazio){
        break;
    }
}

frase.toString.replace(palavraChave);











