let rs = require('readline-sync');

let A = rs.questionInt('Digite um numero ');
let B = rs.questionInt('Digite outro numero ');




if(A%B == 0){
    console.log(`${A} eh divisivel por ${B}`)
}
else console.log(`${A} nao eh divisivel por ${B}`)