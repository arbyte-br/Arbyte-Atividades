let rs = require('readline-sync')

function tabuada(){
    let N = rs.questionInt('Qual tabuada quer saber?')
for (let i = 1; i < 10 ; i++){
    console.log(`${i} * ${N} = ${N*i}`)
}
}

tabuada()