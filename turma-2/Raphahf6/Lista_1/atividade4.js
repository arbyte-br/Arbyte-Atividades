// (OBRIGATÓRIO) As maçãs custam R$ 0,30 cada se forem compradas menos do que
// 12, e R$ 0,25 se forem compradas 12 ou mais. Escreva um programa que leia o número
// de maçãs compradas, calcule e escreva o valor total da compra

function calculaCompra(fruta){
    let preçoFruta = 0.30

    if(fruta >= 12){
        preçoFruta = 0.25
    }

    return fruta * preçoFruta
}

console.log(calculaCompra(10).toFixed(2))