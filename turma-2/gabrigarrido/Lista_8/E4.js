var rs = require("readline-sync")

var nomeUsuario = rs.question("Qual é o seu nome? \n")
var carro = {}

function gerarObjeto(nome){
    let perguntaMarca = rs.question("Qual a marca do carro? \n")
    let perguntaCor = rs.question("Qual a cor do carro? \n")
    let perguntaPreco = rs.questionInt("Qual o valor do carro ? \n")
    carro.marca = perguntaMarca;
    carro.cor = perguntaCor;
    carro.preco = perguntaPreco;
    
}

while(nomeUsuario == ''){
    console.log("É necessario digitar o nome!")
    var nomeUsuario = rs.question("Qual é o seu nome? \n")
    
}


gerarObjeto(nomeUsuario);
console.log(carro);
