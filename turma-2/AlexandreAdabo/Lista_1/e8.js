let rs = require('readline-sync')

let lado1 = rs.questionInt('Qual a medida do primeiro lado do triangulo ? \n')
let lado2 = rs.questionInt('Qual a medida do segundo lado do triangulo ? \n')
let lado3 = rs.questionInt('Qual a medida do terceiro lado do triangulo ? \n')

if(lado1 === lado2 && lado1 === lado3 && lado2 === lado3){
    console.log('Esse triangulo é Equilatero')
}
if(lado1 === lado2 && lado1 !== lado3 || lado1 === lado3 && lado1 !== lado2 || lado2 === lado3 && lado2 !== lado1){
    console.log('Esse triangulo é Isoscele')
}
if(lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3){
    console.log('Esse triangulo é Escaleno')
}