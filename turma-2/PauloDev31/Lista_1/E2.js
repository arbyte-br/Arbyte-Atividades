let rs = require('readline-sync')
let entrada = rs.questionInt('Insira um numero: \n')

if(entrada % 2 === 0){
    console.log('O numero é par!')
}else{
    console.log('O numero é impar!')
}