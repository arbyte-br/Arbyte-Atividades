let rs = require("readline-sync")

let lados = rs.questionInt("Quantos lados tem o seu poligno? ")

if (lados === 3){
    console.log("Seu poligno é um triângulo.")
}else if(lados === 4){
    console.log("Seu poligno é um quadrado.")
}else if(lados === 5){
    console.log("Seu poligno é um pemtágono.")
}else if (lados === 6){
    console.log("Seu poligno é um hexágono.")
}else if(lados === 7){
    console.log("Seu poligno é um heptágono.")
}else if (lados === 8){
    console.log("Seu poligno é um octágono.")
}else if(lados < 3){
    console.log("Não existe poligno com esse valor.")
}else {
    console.log("Seu poligno não foi inserido no programa.")
}
