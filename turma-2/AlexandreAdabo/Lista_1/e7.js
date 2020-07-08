let rs = require('readline-sync')

let numlado = rs.questionInt('Quantos lados tem o poligono ? \n')
let medidalado = rs.questionInt('Qual a medida do lado ? \n')
let area = 0
if(numlado ===3){
    area = area + (medidalado * medidalado)/2
    console.log('É um Triangulo com area de: ' + area + 'cm')
}
if(numlado ===4){
    area = area + medidalado * 4
    console.log('É um Quadrado com area de: ' + area + 'cm')
}
if(numlado ===5){
    console.log('É um Pentagono')
}
