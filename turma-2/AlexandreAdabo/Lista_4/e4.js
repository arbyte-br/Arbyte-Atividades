let rs = require('readline-sync')

let contador = 1
let soma = 0
let limite = 1000
while(contador <= limite){
     if(contador % 3 === 0 && contador % 5 ===0){
         soma = (soma + contador)
         console.log('Contador rodando', contador)
         console.log('Soma', soma)
     }
    contador++
} console.log(soma)