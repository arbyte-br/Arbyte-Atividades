// Tendo como entrada a altura e o sexo codificado da seguinte forma:
// Valor 1 para feminino
// Valor 2 para masculino
// de uma pessoa, construa um programa que calcule e imprima o valor de peso sugerido,
// utilizando as seguintes fórmulas:
// - para homens: (72.7 * Altura) – 58
// - para mulheres: (62.1 * Altura) – 44.7

let rs = require('readline-sync')

let sexo = rs.questionInt('Olá, preciso saber qual seu sexo biológico, digite 1 para femino e 2 para masculino: \n')
if(sexo == 1){
    let alturaF = rs.questionFloat('Sra. qual sua altura em metros (Ex.: 1.65): \n')
    let soma = (alturaF * 62.1) - 44.7
    console.log('Atenção senhora, seu peso ideal é: ' + soma)

}else if(sexo == 2){
    let alturaM =rs.questionFloat('Sr. digite qual sua altura em metros (Ex.: 1.70): \n')
    let soma =(alturaM * 72.7) - 58
    console.log('Atenção senhor, seu pedo ideal é: ' + soma)
}
else {
    console.log('Não, Não, apenas 1 ou 2')
}
 
