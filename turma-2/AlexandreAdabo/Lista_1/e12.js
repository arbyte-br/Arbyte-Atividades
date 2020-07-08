let rs = require('readline-sync')

let numA = rs.questionFloat('Digite um numero para A: \n')
let numB = rs.questionFloat('Digite um numero para B: \n')

if(numA % numB === 0){
    console.log('O numero A e divisivel pelo numero B')
} else {
    console.log('O numero A nao e divisivel pelo numero B')
}