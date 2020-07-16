let rs = require('readline-sync')

let maca1 = rs.questionInt('Digite o número total de maçãs que você quer comprar: ')
let precoMaca1 = 0.30
let precoMaca2 = 0.25

if (maca1 < 12) {
console.log(`Foram compradas ${maca1} maçãs e o preço total é de ${maca1 * precoMaca1} reais`)
} else {
    console.log(`Foram compradas ${maca1} maçãs e o preço total é de ${maca1 * precoMaca2} reais `)
}