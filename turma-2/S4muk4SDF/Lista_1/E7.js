let rs = require("readline-sync")


let lados = rs.questionInt("Qual o número de lados do seu polígono? (Máximo 5 lados) ")

    if (lados == "3") {
        let baseTriangulo = rs.questionInt("Qual a base do triangulo? ")
        let alturaTriangulo = rs.questionInt("Qual a altura do triangulo? ")

        let areaTriangulo = (baseTriangulo * alturaTriangulo) / 2

        console.log('Área do seu triângulo: ', areaTriangulo);

    } else if (lados <= 5){
        if (lados === 4) {
            let medidas = rs.questionInt("Qual a medida dos lados (em `cm`)? ")

            medidas = medidas * medidas

            console.log("Seu polígono é um quadrado com " + medidas + "cm" + " de área.")
        } else if (lados === 5) {
            console.log("Seu polígono é um pentágono ")
        }
    } else {
        console.log("Você excedeu o número de lados permitidos.")
    }



