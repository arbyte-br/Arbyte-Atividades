let rs = require('readline-sync')

function tab(n = rs.questionInt('Digite um numero a sua escolha para ver a sua tabuada: ')) {
    let result

    for (let i = 1; i < 10; i++) {
        result = n * i
        console.log(`${i} X ${n} = ${result}`)
    }
}
tab()