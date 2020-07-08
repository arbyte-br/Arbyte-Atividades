let rs = require ('readline-sync')

let n = rs.questionInt('Digite um numero maior que 0: ')

let i = 1
let astera = '*'

if (n > 0){
    while(i <= n){
        console.log(astera.repeat(i))
        i++ 
    }
}else{
    console.log('Número não é maior que 0.')
}