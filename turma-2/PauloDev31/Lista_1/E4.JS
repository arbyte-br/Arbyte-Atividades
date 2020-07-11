let rs = require('readline-sync')
let maçaMenosQueDoze = 0.30 
let maçaMaisqueDoze = 0.25

let perguntaUsuario = rs.questionInt('Quantas maçãs deseja comprar? \n')
 let calculoUm = perguntaUsuario * maçaMaisqueDoze
 let calculoDois = perguntaUsuario * maçaMenosQueDoze
if(perguntaUsuario < 12){
console.log(`O total da sua compra é R$ ${calculoDois}`)
}else{
console.log(`O total da sua compra é R$ ${calculoUm}`)
}