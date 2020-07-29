let rs = require('readline-sync');

function primo(){
    let numero = rs.questionInt('insira um numero: ');

    if(numero === 1){
        return 'não primo'
    }

    if(numero === 2){
        return 'primo'
    }

    let eprimo = numero % 2 === 0?'nao primo':'primo'
    return eprimo
}


console.log(primo())