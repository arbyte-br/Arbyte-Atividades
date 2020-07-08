let rs = require('readline-sync')

let macaComprada = rs.questionInt('Quantas macas deseja comprar ? ')
let total = 0
if(macaComprada < 12){
    total = total + macaComprada * 0.30
    console.log('O preco total das macas fica: ' + total)
} else if (macaComprada >= 12) {
    total = total + macaComprada * 0.25
    console.log('O preco total das macas fica: ' + total)
}
