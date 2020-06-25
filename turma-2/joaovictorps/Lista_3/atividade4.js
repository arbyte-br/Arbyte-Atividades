let rs= require('readline-sync')

let numero = rs.questionInt('Digite um número: ')

let contador = 0

while( contador <= numero) { 
    console.log(contador)
    contador = contador + 2
}