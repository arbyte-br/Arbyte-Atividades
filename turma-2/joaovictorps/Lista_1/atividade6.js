let rs = require('readline-sync')

let sexo = rs.questionInt('Qual o seu sexo ? \n Digite 1 para Feminino \n Digite 2 para Masculino\n')
let altura = rs.questionFloat('Qual a sua altura ? \n')

if (sexo === 1) {
    let pesoSugeridoF = (62.1 * altura) - 44.7
    console.log(`O peso sugerido para você é ${pesoSugeridoF.toFixed(1)}`)
} else {
    let pesoSugeridoM = (72.7 * altura) - 58
    console.log(`O peso sugerido para você é ${pesoSugeridoM.toFixed(1)}`)
}