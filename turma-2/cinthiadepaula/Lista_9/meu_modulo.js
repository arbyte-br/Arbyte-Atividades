let rs =  require('readline-sync')

var moduloArbyte = function(){
    var notas= []
    for (let x = 0; x < 4; x++){
     notas.push(rs.questionInt('Insira as notas: '))
    }
    
    var median = require('median')
    var value = median(notas)
     
    console.log("O valor da média é " + value)
}

exports.moduloArbyte = moduloArbyte