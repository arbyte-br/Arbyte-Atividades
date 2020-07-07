let readline = require("readline-sync")

let lados = readline.questionInt("Quantos lados possui o seu poligono regular? : ")

let cm = readline.questionInt("Quantos cm possui o lado do poligono? : ")

if (lados == "3") {
    
    console.log("Seu Triangulo possui", cm * lados, "Área total em cm")
}

else if (lados == "4") {
    
    console.log("Seu Quadrado possui", cm * lados, "Área total em cm")
}

else if (lados == "5") {
    console.log("Seu Pentagono possui", cm * lados, "Área total em cm")
}

else {
    console.log("Não conseguir calcular tente novamente")
}