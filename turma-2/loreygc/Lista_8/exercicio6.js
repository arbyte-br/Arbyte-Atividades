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