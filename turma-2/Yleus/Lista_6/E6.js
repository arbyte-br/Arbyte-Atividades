rs = require ('readline-sync')

palavra = rs.question("Digite uma palavra:\n>>")

if (palavra.endsWith("al")) {

    console.log ("A palavra que voce digitou termina com al: " + palavra)

} else { 
    palavra = rs.question ("Palavra não identificada") 
}