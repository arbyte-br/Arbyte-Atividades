let rs = require("readline-sync")

let nomeUsuario = rs.question("Digite seu nome")
let diaUsuario = rs.question("Digite o dia em que você nasceu")
let mesUsuario = rs.question("Digite o mes em que você nasceu")
let anoUsuario = rs.question("Digite o ano em que você nasceu, com os 4 digitos")

console.log(`${diaUsuario}/${mesUsuario}/${anoUsuario}`)
let nascimento = `${diaUsuario}/${mesUsuario}/${anoUsuario}`


let dataDia = 9
let dataMes = 7
let dataAno = 2020
let idade = -1

for(i=anoUsuario; i<dataAno; i++){

    if(dataAno == i){                              //checagem ano 2020
        if(dataMes < mesUsuario){
            idade++
        }
        else if(dataMes == mesUsuario){
            if(dataDia <= diaUsuario){
                idade++    
            }
        }
    }
    else{
        idade++

    }
    
}

var usuario = {
    nome: nomeUsuario,
    data: nascimento,
    idade: idade
}
console.log(usuario.idade)

