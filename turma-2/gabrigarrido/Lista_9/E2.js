var rs = require('readline-sync')
var FasamImc = require('fasam-imc-calc')

function calcularIMC(){
    usuarioPeso = rs.questionInt("Informa seu peso!: ")
    usuarioAltura = rs.questionFloat("Informe sua altura!: ")
    const imc = new FasamImc(usuarioPeso, usuarioAltura)
    console.log("O calculo do seu imc é: "+ imc.calc())
}

calcularIMC();
