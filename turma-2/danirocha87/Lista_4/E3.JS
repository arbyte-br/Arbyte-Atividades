let rs = require ('readline-sync')

let numero = rs.questionInt('Por Favor, Digite um número maior que 0: ')

let d = 1
let asterisco = '*'

if (numero > 0){
    while( d <= numero){
    console.log(asterisco.repeat(d))
    d++ 
}

}
else{
    console.log('Número não é maior que 0.')
}