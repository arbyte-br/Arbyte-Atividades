let rs = require('readline-sync');

let n1 = rs.questionInt('Digite a primeira nota ');
let n2 = rs.questionInt('Digite a segunda nota ');
let n3 = rs.questionInt('Digite a terceira nota ');

let resultado = ((n1+n2+n3)/3);

if(resultado >= 7){
    console.log(`sua nota eh ${resultado}, voce foi APROVADO`)
}
else console.log(`sua nota eh ${resultado}, voce foi REPROVADO`)