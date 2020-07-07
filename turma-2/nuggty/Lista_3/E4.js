let rs = require('readline-sync');

let numero = rs.questionInt('Digite um número: ');
let i = 0

while(i <= numero) {
    if(i%2 == 0){
        console.log(i);
    }
    i++;
}
