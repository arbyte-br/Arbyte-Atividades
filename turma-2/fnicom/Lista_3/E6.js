let rs = require("readline-sync")

let respaUser = rs.question("Insira a Palavra para visualiza-la ao contrario \n")

let respInvert = respaUser.split("").reverse().join("");


console.log(respInvert);
