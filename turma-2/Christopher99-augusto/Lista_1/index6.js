let rs = require("readline-sync")

let peso = rs.questionFloat("qual o seu peso? \n")

let altura = rs.questionFloat("qual o seu altura? \n")

let IMC = peso / (altura * altura)

console.log ("o seu IMC é " + IMC)

if (IMC <= 17){


    console.log ("Muito abaixo do peso")
}
else if (IMC >= 17 < 19){

    console.log ("Abaixo do peso")
}
else if (IMC >= 19 < 25){

    console.log ("Peso normal")
}
else if (IMC >= 25 < 30){

    console.log ("Acima do peso")
}
else if (IMC >= 30 > 35){

    console.log ("Obesidade I")
}
else if (IMC >= 34 > 40){

    console.log ("Obesidade II")
}
else {

    console.log ("Obesidade III")
}