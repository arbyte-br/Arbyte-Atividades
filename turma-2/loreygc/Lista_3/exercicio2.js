let rs= require ('readline-sync')
//Entrada de informação do usuário

let valorI= rs.questionInt("Por favor, digite o número a ser multiplicado: ")
let valorM= rs.questionInt("Por favor, digite por quantas vezes vocês quer que este valor se multiplique: ")

//Calculando 
let contador=0 
let resultado=0

while (contador!== valorM) {
    resultado= resultado+valorI
    contador= contador +1
}
//Fim e leitura  do resultado
    console.log ("O resultado da sua multiplicação é " + resultado)
    