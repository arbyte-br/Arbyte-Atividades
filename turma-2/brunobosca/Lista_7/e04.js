let rs = require('readline-sync');

 let numeroTabuada = rs.questionInt('Insira um número: '); 

 let x = 1
 let y = 1

 function tabuada() {
    for(x; x <= 10; x++) {
        for (y; y <= 10; y++)
        console.log(`${numeroTabuada} x ${y} = ${numeroTabuada*y}`)
    }    
 }
 tabuada ()
 
 
 
      


