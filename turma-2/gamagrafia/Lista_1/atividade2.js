let rs=require('readline-sync')

let número=rs.questionInt('Qual número escolhido?')

if (número % 2===0){
    console.log (`${número} é PAR`)
} else {
    console.log (`${número} é ÍMPAR`)
}