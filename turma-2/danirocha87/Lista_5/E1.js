let rs = require("readline-sync")

let respostadousuario = rs.question("Digite uma palavra   ")

let vogais = "aeiou"

let totaldepalavras = respostadousuario.length

for(let contador = 0; contador <totaldepalavras; contador ++){
  let posiçãodaletra = respostadousuario.charAt(contador)
  
  if(vogais.includes (posiçãodaletra) ){
        let começodapalavra = respostadousuario.slice(0, contador)
        let vogal = posiçãodaletra
        let fimdapalavra = respostadousuario.slice(contador + 1)

           respostadousuario = começodapalavra + vogal.toUpperCase() + fimdapalavra
  }  

}
console.log(respostadousuario)







//let palavraporordem = respostadousuario,totaldepalavras.charat

