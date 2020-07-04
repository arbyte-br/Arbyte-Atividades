/*Escreva um programa para ler o número de lados de um polígono regular e a medida do
lado (em cm). Calcular e imprimir o seguinte:
− Se o número de lados for igual a 3 escrever TRIÂNGULO e o valor da área
− Se o número de lados for igual a 4 escrever QUADRADO e o valor da sua área.
− Se o número de lados for igual a 5 escrever PENTÁGONO*/

let rs = require('readline-sync')
let lados = rs.questionInt('Digite o numero de lados tem o seu poligono(entre 3 a 5)> ')
let cm = rs.questionInt('Digite o tamanho em centimetro que cada lado tem> ')
let area

if(lados === 3){
    let altura = (cm*Math.sqrt(3))/2
    area = (cm*altura)/2
    console.log(`A area do seu triângulo é ${area}`)
}else if(lados === 4){
    area = cm*cm
    console.log(`A area do seu quadrado é ${area}`)
}else if(lados === 5){
    area =  (5*(Math.pow(cm, 2)))/(4*(Math.sqrt(5 - 2*(Math.sqrt(5)))))
    console.log(`A area do seu pentágono é ${area}`)
}