// Escreva um programa para ler o número de lados de um polígono regular e a medida do
// lado (em cm). Calcular e imprimir o seguinte:
// − Se o número de lados for igual a 3 escrever TRIÂNGULO e o valor da área
// − Se o número de lados for igual a 4 escrever QUADRADO e o valor da sua área.
// − Se o número de lados for igual a 5 escrever PENTÁGONO.

let rs = require('readline-sync')
let lados = rs.questionInt("Digite a quantidade de lados de um poligono regular: (3, 4 ou 5) \n")
let soma = 0
let altura = 0

if(lados == 3){
    let base = rs.questionFloat('Digite a medida de um dos lados (em cm): ')
    soma = (((base * base) / 4) * 1.7) // 1,7 = raiz de 3 || pitagoras
    console.log(` O valor da área desse Triângulo Equilátero é:  ${soma / 10000}m²`)

}else if(lados == 4){
    let lado = rs.questionFloat('Agora digite a medida de um dos lados (em cm): \n')
    soma = ((lado / 100) * (lado / 100))
    console.log(`O valor da área desse Quadrado é: ${soma}m² `)

}else if(lados == 5){
    let lado = rs.questionFloat('Agora digite a medida de um dos lados (em cm): \n')
    altura = ((lado / 100) / 2) / 0.726543 //tan(36º)
    let triangulo = (((lado / 100) / 2) * altura) * 1/2  // área de cada triângulo (1/2 lado altura)
    soma = triangulo * 10
    console.log(`O valor da área desse Pentágono regular é: ${soma} m²`)
    // console.log(triangulo)
}else{
    console.log("Atenção: Digite 3, 4 ou 5")
}