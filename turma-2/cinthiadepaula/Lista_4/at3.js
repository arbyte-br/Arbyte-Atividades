let rs = require ('readline-sync');

let num = rs.questionInt('Digite o primeiro numero de 1 a 100 ');

i='*';
let cont = 0;
while (cont < num){
    console.log (i);
    
    num = num - 1;
}
