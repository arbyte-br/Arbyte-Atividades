let rs =  require('readline-sync')

var moduloArbyte = function(){
    var peso = rs.questionInt("Digite o seu peso: ");
    var alt = rs.questionInt("Digite a sua altura: ");
    //console.log(`${peso} ${alt}`)
    const FasamImc = require('fasam-imc-calc');
    const imc = new FasamImc();
    imc.calc(peso, alt);
    
}

exports.moduloArbyte = moduloArbyte