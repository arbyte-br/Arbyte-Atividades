let rs = require ('readline-sync')

let palavra = rs.question("Digite uma palavra:\n")

if (palavra.includes("np") || palavra.includes ("nb")) {

    console.log ("Sua palavra está incorreta") 

} else { 
    console.log ("Sua palavra esta correta!") 


}

