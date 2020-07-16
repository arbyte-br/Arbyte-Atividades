let rs = require ("readline-sync")

let numero = rs.questionInt("Digite um numero: ")

if (numero % 2 == 0){
    console.log(" É PAR.")
}else {
    console.log(" É IMPAR.")
}
