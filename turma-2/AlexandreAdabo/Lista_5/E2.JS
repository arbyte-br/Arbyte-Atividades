let rs = require('readline-sync')

let valormenor = rs.questionInt('Digite um numero: \n')
let valormaior = rs.questionInt('Digite outro numero maior: \n')

if (valormaior > valormenor) {
 for(contador = 0; valormaior >= valormenor; valormenor++){
    console.log(valormenor)
 }
} else {
    console.log('Valor inserido da forma errada!')
}