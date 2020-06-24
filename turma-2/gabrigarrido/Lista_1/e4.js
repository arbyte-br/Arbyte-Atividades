var rs = require ("readline-sync")
var compra = rs.questionFloat("Qual o número de maçãs compradas?")

if( compra >= 12){
    var compra12 = (compra*0.25)
    console.log("Você vai pagar "+compra12.toFixed(2)+" reais")
} else if(compra < 12){
   var compraMenos12 = (compra*0.30)
   console.log("Você vai pagar "+compraMenos12.toFixed(2)+" reais")

}