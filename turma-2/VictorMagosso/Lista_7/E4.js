let rs = require('readline-sync')

function tabuada(n = rs.questionInt('Digite um número para ver sua tabuada: ')){
    let resultado

    for(let i = 1; i < 10; i++){
        resultado = n*i
        console.log(`${i} X ${n} = ${resultado}`)
    }
}
tabuada()

