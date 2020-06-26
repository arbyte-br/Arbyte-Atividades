let rs = require('readline-sync')

let userText = rs.question("Por favor digite uma frase: \n")

	


let text = userText.length

for(let x = 0; x <= text; x ++) {
    switch(userText.charAt(x)){
        
    case "a":
        console.log("A")
    break;
    case "e":
        console.log("E")
    break;
    case "i":
        console.log("I")
    break;
    case "o":
        console.log("O")
    break;
    case "u":
        console.log("U")
    break;
    default:
    console.log(userText.charAt(x))
    break;
        
}
}
