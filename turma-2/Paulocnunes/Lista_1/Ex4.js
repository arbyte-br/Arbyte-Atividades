//As maçãs custam R$ 0,30 cada se forem compradas menos do que
//12, e R$ 0,25 se forem compradas 12 ou mais. Escreva um programa que leia o número
//de maçãs compradas, calcule e escreva o valor total da compra

let rs = require('readline-sync')

let maçasCompradas = rs.question('Quantas maçãs foram compradas? \n')

let preçoDasMaças = 0

if (maçasCompradas < 12 ) {
   preçoDasMaças = 0.30
   console.log('Você gastou R$ ' + preçoDasMaças * maçasCompradas)
   
}   else {
   preçoDasMaças = 0.25
   console.log('Você gastou R$ ' + preçoDasMaças * maçasCompradas)
}

