// Crie um programa que receba uma palavra e exiba quantas 
// consoantes e vogais essa palavra tem.  
// EX : saúde 
// 2 consoantes 
// 3 vogais 


let rs = require("readline-sync")

let palavra = rs.question("insira uma palavra: \n")

let vog = 0

let cons = 0 

palavra = palavra.toLowerCase()

for (i=0 ; i<palavra.length ; i++){
switch (palavra.charAt(i)){
    case "a":
        vog = vog + 1
        break;
        case "e":
            vog = vog + 1
            break;
            case "i":
                vog = vog + 1
                break;
                case "o":
                    vog = vog + 1
                    break;
                    case "u":
                        vog = vog + 1
                        break;
                        default:
                            cons = cons + 1
                            break;
}
}
console.log(`${cons} consonantes`)
console.log(`${vog} Vogais`)