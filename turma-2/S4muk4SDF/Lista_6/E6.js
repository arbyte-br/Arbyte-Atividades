let rs = require("readline-sync")


let palavra = rs.question("Digite uma palavra que termine com 'al': ")


 if (palavra.endsWith("al")) {
    console.log("Sua palavra termina com 'al'.")
} else {
     console.log("Sua palavra não termina com 'al'.")
}

