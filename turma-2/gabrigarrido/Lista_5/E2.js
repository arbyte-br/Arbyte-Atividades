var rs = require('readline-sync')
var numero1 = rs.questionInt("Entre com o Valor Inicial")
var numero2 = rs.questionInt("Entre com o Valor Final")

for(var i = numero1; i <= numero2; i++) { 
        console.log(i)    
}
