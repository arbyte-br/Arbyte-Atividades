let rs = require('readline-sync');

function volume(r)
{
return 4/3*Math.PI*Math.pow(r,3)
};

let raio = rs.question('Digite o valor do raio: ');

console.log(volume(raio));
