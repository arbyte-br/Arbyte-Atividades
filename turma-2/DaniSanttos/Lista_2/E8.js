let rs = require('readline-sync')
let palavra = rs.question('Digite uma palavra: ')

let primeiraLetra = palavra.charAt(0)
let letraMaiusculas = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ')

let ehLetraMaiuscula = letraMaiusculas.includes(primeiraLetra)
if(ehLetraMaiuscula){
    console.log('A primeira letra é maiúscula.')
}else{
    console.log('A primeira letra não é maiuscula.')
}