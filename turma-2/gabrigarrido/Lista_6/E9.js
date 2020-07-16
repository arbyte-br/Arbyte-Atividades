var rs = require('readline-sync');

var frase = rs.question("Por favor informe uma frase a ser convertida! \n");



palavraChave = "bosta";
palavraCensurada = "estrume";
var vazio = ""

while(frase == vazio){
    console.log("Por favor, insira um texto!");
    frase = rs.question("Por favor informe uma frase a ser convertida! \n"); // como chamar a variavel sem ter que escrever tudo de novo?
    if(frase == !vazio){
        break;
    }
}

resultado = frase.replace(palavraChave, palavraCensurada)
console.log(`A frase convertida fica como: ( ${resultado} )`)











