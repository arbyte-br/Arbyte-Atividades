let readline = require("readline-sync")

let inicial = readline.questionInt("Insira o número inicial ")

let final = readline.questionInt("Insira o número final ")

while (inicial >= final) {
    
    final = readline.questionInt("Número inicial menor que o final. Insira outro número final.")
}
for (i = inicial; i <= final; i++){
    console.log(i)
}