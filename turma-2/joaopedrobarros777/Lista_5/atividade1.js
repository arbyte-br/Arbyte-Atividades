let rs = require("readline-sync")

let texto = rs.question("insira uma frase: \n")

let tamtexto = texto.length

for(let x = 0; x <= tamtexto; x ++) {
    switch(texto.charAt(x)){
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
                                console.log(texto.charAt(x))
                                break;
    }
}
