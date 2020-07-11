let rs = require("readline-sync")

let nomeUsuario = rs.question("Digite seu nome\n>>")
let diaUsuario = rs.question("Digite o dia em que você nasceu\n>>")
let mesUsuario = rs.question("Digite o mes em que você nasceu\n>>")
let anoUsuario = rs.question("Digite o ano em que você nasceu, com os 4 digitos\n>>")
let nomeUsuario2 = rs.question("Digite seu nome\n>>")
let diaUsuario2 = rs.question("Digite o dia em que você nasceu\n>>")
let mesUsuario2 = rs.question("Digite o mes em que você nasceu\n>>")
let anoUsuario2 = rs.question("Digite o ano em que você nasceu, com os 4 digitos\n>>")


console.log(`${diaUsuario}/${mesUsuario}/${anoUsuario}`)
let nascimento1 = `${diaUsuario}/${mesUsuario}/${anoUsuario}`
let nascimento2 = `${diaUsuario2}/${mesUsuario2}/${anoUsuario2}`


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

for(i=anoUsuario2; i<dataAno; i++){

    if(dataAno == i){                              //checagem ano 2020
        if(dataMes < mesUsuario2){
            idade++
        }
        else if(dataMes == mesUsuario2){
            if(dataDia <= diaUsuario2){
                idade++    
            }
        }
    }
    else{
        idade++

    }
    
}

var usuario1 = {
    nome: nomeUsuario,
    data: nascimento1,
    idade: idade
}

var usuario2 = {
    nome: nomeUsuario2,
    data: nascimento2,
    idade: idade
}

if(usuario1.idade < usuario2.idade){
     console.log(`${nomeUsuario} é mais velho que o ${nomeUsuario2}`)
}
else{
    console.log(`${nomeUsuario2} é mais velho que o ${nomeUsuario}`)
}

