let rs = require('readline-sync')

let valorProduto = rs.questionFloat('Qual o valor do produto que você deseja comprar? ')

console.log('Agora vamos calcular o quanto você tem de dinheiro no cofrinho: \n')

let r1 = rs.questionFloat('Quantas moedas de 1 real você conseguiu? ')
let c50 = rs.questionFloat('Quantas moedas de 50 centavos você conseguiu? ')
let c25 = rs.questionFloat('Quantas moedas de 25 centavos você conseguiu? ')
let c10 = rs.questionFloat('Quantas moedas de 10 centavos você conseguiu? ')
let c5 = rs.questionFloat('Quantas modeas de 5 centavos você conseguiu? ')
let c1 = rs.questionFloat('Quantas moedas de 1 centavo você conseguiu? ')

r1 = r1 * 1
c50 = c50 * 0.50
c25 = c25 * 0.25
c10 = c10 * 0.10
c5 = c5 * 0.05
c1 = c1 * 0.01

let total = r1 +  c50 + c25 + c10 + c5 + c1

if(total < valorProduto){
    console.log(`O valor total do cofrinho é de R$${total.toFixed(2)} e o valor do produto é de R$${valorProduto.toFixed(2)}, então você não vai conseguir comprar o produto desejado :(`)
}else{
    console.log(`O valor total do cofrinho é de R$${total.toFixed(2)} e o valor do produto é de R$${valorProduto.toFixed(2)}, então parabéns você conseguiu reunir dinheiro para comprar o seu produto desejado :)`)
}
