rs = require ('readline-sync')

palavra = rs.question("Digite uma palavra:\n")

if (palavra.endsWith("al")) {

    console.log ("Sua palavra termina com al: " + palavra)

} else { 
    palavra = rs.question ("Palavra não identificada") 
}

