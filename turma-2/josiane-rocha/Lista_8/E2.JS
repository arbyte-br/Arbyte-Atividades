/* (OBRIGATÓRIO) Crie um programa que faça o mesmo do exercício anterior porém
pergunte para o usuário se a xícara está cheia ou não. */

let rs = require('readline-sync')

let xicara1 = rs.question(console.log('A xícara está cheia? (Sim/Não) \n'))

let xicara =  {
    cheia: xicara1, cor: ('Verde') 
} 

console.log(xicara)

