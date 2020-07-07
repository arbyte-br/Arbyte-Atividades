let rs = require('readline-sync')

let n1 = rs.questionInt('Digite o ponto de partida de sua contagem:')
let n2 = rs.questionInt('Digite o ponto final de sua contagem:')

while (n1 < n2){
    n1++
    if(n1%7 == 0 && n1%5 == 0){
        console.log(`${n1} Ping Pong`)
    }else if (n1%5 == 0){
        console.log(`${n1} Pong`)
    }else if (n1%7 == 0){
        console.log(`${n1} Ping`)
    }else{
        console.log(n1)
    }
}
console.log('========================')