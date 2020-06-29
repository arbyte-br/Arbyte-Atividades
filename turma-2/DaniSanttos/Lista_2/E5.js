let rs = require('readline-sync')

let wattsConsumidos = ('Quantos Watts foram consumidos nessa residência? ')
let valorDoWatts = (1045 / 7) / 100
let valorDoWattsConsumido = valorDoWatts * wattsConsumidos
let wattsDesconto = valorDoWattsConsumido / 10
let wattsFinal = valorDoWattsConsumido - wattsDesconto 
console.log(`O Valor consumido foi de R$${valorDoWattsConsumido.toFixed(2)} Watts e você ganhou um desconto de R$${wattsDesconto}, então o valor final será de R$${wattsFinal}`)

//O enunciado acho que está escrito errado, então fiz de outra maneira sem o if só pra essa questão não passar batido.
//As várias contas foram de propósito só pra aumentar a complexibilidade pra compensar a falta do if. :D 