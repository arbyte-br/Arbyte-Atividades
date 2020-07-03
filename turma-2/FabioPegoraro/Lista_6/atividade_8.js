//Faça um algoritmo que receba uma palavra, após isso ele remove todas as vogais 
//dessa palavra e imprime a palavra novamente porém sem as vogais. 
//EX: Entrada banana O algoritmo imprime :  Bnn 
//Utilize o método ​split()​ para quebrar a string e depois montar ela sem vogais. 


let rs = require("readline-sync")

let respostaUsuario = rs.question("Digite uma palavra:").toLowerCase()
let vogais = "aeiou"
let totalCaracteres = respostaUsuario.length

let resultado = []

for(i = 0; i < totalCaracteres; i++){
    let caractereAtual = respostaUsuario.split("")
       if (!vogais.includes(caractereAtual[i])){
       resultado.push(caractereAtual[i])
    }
}
console.log(resultado.join(""))