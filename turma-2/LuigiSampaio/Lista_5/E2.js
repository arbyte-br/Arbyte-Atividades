let rs = require('readline-sync');

let n1 = rs.questionInt('numero um: ');
let n2 = rs.questionInt('numero dois: ');

if (n1 < n2){
    for(let i = n1; i <= n2; i++){

        console.log(i);
    }
}else{
    console.log('intervalo Invalido');
}
