let rs = require('readline-sync')
let palavra = rs.question("Insira uma palavra: ");


let vogais = ['a','e', 'i','o','u','A','E','I','O','U'];
let QtdVogais = 0;
let QtdConsoantes = 0

for(let i = 0; i < palavra.length; i++){
    if (vogais.indexOf(palavra[i]) != -1){
    QtdVogais++
} else {
    QtdConsoantes++
}
}


console.log(`A palavra '${palavra}' contém ${QtdConsoantes} consoantes e ${QtdVogais} vogais`)