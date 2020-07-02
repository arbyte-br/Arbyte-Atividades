let rs = require('readline-sync');

function tabuada(numero){
    let num = rs.questionInt('insira um numero: ');

    for(let cont=0; cont <10; cont++){
        console.log(`${cont} X ${num} = ${cont * num}`);
        
    }

    
}

let result = tabuada();
console.log(result);