let  rs = require ('readline-sync')

let palavra = rs.question ("Digite uma palavra:\n")


if (palavra.indexOf ("a" || "e" || "i"||"o"||"u")) {
 
    console.log ("Sua palavra tem vogal!")

} else { 
    console.log ("Não tem vogal") 
}
