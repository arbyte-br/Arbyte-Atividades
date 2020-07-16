let rs = require('readline-sync');

let A = rs.questionInt('Digite um numero ');





if(A >=100 && A <= 200)
{
    console.log(`voce digitou um numero entre 100 e 200`)
}
else console.log(`${A} esta fora da faixa entre 100 e 200`)