//(OBRIGATÓRIO) Faça um programa que recebe um número de entrada e repita a
//mensagem “BIP BIP” de acordo com o número inserido.
//EX: usuário inseriu 3
//O programa imprime:
//BIP BIP
//BIP BIP
//BIP BIP

let rs = require('readline-sync')

let contador = 0
let usuario = rs.questionInt('Insira um número \n ')

for (let i = 0; contador !== usuario; i ++)
while (contador !== usuario){
    console.log('BIP BIP')
    contador ++
}
