let rs=require('readline-sync')

//Inserindo a quantidade maçãs
let qtm = rs.questionInt("Insira quantas maçãs comprou: ")
//Definindo os preços
let preco1 = 0.25
let preco2 = 0.30
//Operações
let qtm2 = qtm*preco1
let qtm3 =qtm*preco2
//Executando 
if (qtm>=12) {
    console.log("o valor da sua compra foi: " +qtm2)
} else  (qtm<11); {
    console.log("O valor da sua compra foi: "+qtm3)
} 