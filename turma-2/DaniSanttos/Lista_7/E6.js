let rs = require('readline-sync')

let n = rs.questionInt('Digite um número: ')

function conferencia (){
    while (n < 1 || n > 10){
        n = rs.questionInt(`O número deve estar entre 1 e 10. Digite Novamente: `)
    }
    if (n > 0 && n < 11){
        return `Número OK.`
    }    
}
console.log(conferencia(n))