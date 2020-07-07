let readline = require("readline-sync")

let dd = readline.question("Qual seu DD? ")

if (dd == 1) {
    console.log(dd, "Esse DD é dos Estados Unidos")
}
else if (dd == 49) {
    console.log(dd, "Esse DD é da Alemanha")
}
else if (dd == 54) {
    console.log(dd, "Esse DD é da Argentina")
}
else if (dd == 55) {
    console.log(dd, "Este DD é do Brasil")
}
else if (dd == 35) {
    console.log(dd, "Este DD é de Portugal")
}
else {
    console.log("DD não cadastrado")
}