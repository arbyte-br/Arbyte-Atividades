let rs = require('readline-sync')

let tabuada = rs.questionInt('Você quer saber a tabuada de qual número? ')

let multiplcador = 0
while(multiplcador < 10){
    multiplcador++
    console.log(`${tabuada} X ${multiplcador} = ${tabuada*multiplcador}\n-------------`)
}
console.log('=======================')