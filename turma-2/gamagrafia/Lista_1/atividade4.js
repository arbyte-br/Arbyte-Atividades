let rs=require('readline-sync')

let quantas=rs.questionInt('Quantas maçãs você quer?')

let maçãMenorque12= 0.30
let maçãMaiorque12= 0.25

if(quantas>= 12){
    console.log("O total de sua compra deu " + quantas*maçãMaiorque12)
} else {
    console.log ("O total de sua compra deu " + quantas*maçãMenorque12)
}