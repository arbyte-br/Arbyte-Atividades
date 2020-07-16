let rs = require('readline-sync')

let quantidade = rs.questionInt('Informe a quantidade de macas que deseja comprar: ')
let valorMaca
let precoCompra

if (quantidade < 12){
    valorMaca = 0.30
    console.log(`O valor da sua compra é R$ ${precoCompra = quantidade*valorMaca}`) 
}else{
    valorMaca = 0.25
    console.log(`O valor da sua compra é R$ ${precoCompra = quantidade*valorMaca}`) 
}
console.log('=================================') 
