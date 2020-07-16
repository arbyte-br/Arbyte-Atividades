// Adicione no programa anterior, após a impressão dos dados, a funcionalidade de salvar 
// o objeto carro em formato JSON.  
// Utilize o JSON.stringify para transformar o objeto em string e após isso utilize os 
// métodos da biblioteca ‘fs’ para salvar o arquivo. 
// Salve o json como ‘carro.json’ 
let rs = require("readline-sync")

let usuario = new Object()

usuario.nome = rs.question("Informe seu nome: \n")

usuario.numero = []

for(i=0; i<3; i++){
    num = rs.question("Informe um número: \n")
    usuario.numero.push(num)
}

console.log(usuario)

myusuario = JSON.stringify(usuario)

let fs = require('fs')

fs.writeFile("carro.json", myusuario, function(err){
    if(err){
        console.log(err)
    }else{
        console.log("Arquivo Salvo!")
    }
})