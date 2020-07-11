let rs = require('readline-sync')

let numeroUm = rs.question('Digite um numero: \n')
let numeroDois = rs.question('Digite mais um numero: \n')
let numeroTres = rs.question('Digite outro numero: \n')

if(numeroUm < numeroDois && numeroDois < numeroTres){
    console.log(`${numeroUm}, ${numeroDois}, ${numeroTres}`)
}else if(numeroDois < numeroUm  && numeroUm < numeroTres){
    console.log(`${numeroDois}, ${numeroUm}, ${numeroTres}`)
}else if(numeroTres < numeroDois && numeroDois < numeroUm){
    console.log(`${numeroTres}, ${numeroDois}, ${numeroUm}`)
}else if(numeroTres < numeroUm && numeroUm < numeroDois){
    console.log(`${numeroTres}, ${numeroUm}, ${numeroDois}`)
}else if(numeroDois < numeroTres && numeroTres < numeroUm){
    console.log(`${numeroDois}, ${numeroTres}, ${numeroUm}`)
}else if(numeroUm < numeroTres && numeroTres < numeroDois){
    console.log(`${numeroUm}, ${numeroTres}, ${numeroDois}`)
}