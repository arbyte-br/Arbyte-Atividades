let rs = require('readline-sync');

let dia = 1000 * 60 * 60 * 24;
let hj = new Date();
let nasc = rs.question('Escreva sua data de nascimento na ordem a seguir!! AAAA/MM/DD: ');
let dataNasc = new Date(nasc);

function nascDias(hj, dataNasc) {
    let hjMes = hj.getTime();
    let nascMes = dataNasc.getTime();
    let calcDif = Math.abs(hjMes - dataNasc);
    return Math.round(calcDif / dia);
}

console.log(nascDias(hj, dataNasc));