let rs = require('readline-sync')

function menorNumero(){
    let n1= rs.questionInt('Digite um número: ')
    let n2= rs.questionInt('Digite outro número: ')
    if (n1 < n2){
        console.log(`O número ${n1} é menor.`);
    } else console.log(`O número ${n2} é menor.`)
}

menorNumero()