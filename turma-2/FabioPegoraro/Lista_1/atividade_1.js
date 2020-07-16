
let rs = require("readline-sync")

let dataDeNascimneto = rs.question("Qual ano você nasceu? Ex.: 1993\n")
let idadeMinima = "2004"

if(dataDeNascimneto <= idadeMinima){
    console.log("Você pode votar")
}else{
    console.log("Você NÃO pode votar")
}

