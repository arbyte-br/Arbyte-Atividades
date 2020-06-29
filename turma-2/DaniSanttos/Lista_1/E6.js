let rs = require("readline-sync")

let sexo = rs.questionInt("Digite 1 se seu sexo for feminino ou 2 se for masculino: ")
let altura = rs.questionFloat("Qual a sua altura?: ")

if( sexo === 1){
    peso = ((62.1 * altura) - 44.7).toFixed(2)
    console.log("O peso ideal para o seu sexo é " + peso)
}else{
    peso = ((72.7 * altura) - 58).toFixed(2)
    console.log("O peso ideal para o seu sexo é " + peso)
}