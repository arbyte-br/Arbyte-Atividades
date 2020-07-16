let rs = require("readline-sync")


let palavra = rs.question("Digite uma palavra: ")

if (palavra.includes("np")) {

    console.log("A palavra está errada.")

} else if (palavra.includes("nb")) {

    console.log("A palavra está errada.")

} else {
    console.log("A palavra está certa.")
}