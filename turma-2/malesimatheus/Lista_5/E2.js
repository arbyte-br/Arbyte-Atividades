let rs = require('readline-sync');

let n1 = Number(rs.question('Insira o numero inicial: '));

let n2 = Number(rs.question('Insira o numero final: '));

for (let i = n1; i <= n2; i++) {
    console.log(i);
}