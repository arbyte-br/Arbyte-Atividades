var rs = require('readline-sync');
var numero = rs.questionInt('Digite um numero inteiro');
var fatorial = 1;

for(let i=1; i <= numero; i++){
    fatorial = fatorial * i;
    
}
console.log(fatorial);



/*fatorial = fatorial *  i;
fatorial =  1 * 1;
fatorial =  1 * 2;
fatorial =  2 * 3;
 como resolver*/