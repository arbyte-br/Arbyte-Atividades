let rs = require('readline-sync');

let dia = rs.question('Digite o dia que voce nasceu: \n');
let mes = rs.question('Digite o mes que voce nasceu(1 a 12): \n');
let ano = rs.question('Digite o ano em que voce nasceu: \n');

if (ano <= 2002 ) {
console.log('Voce deve votar nas eleicoes deste ano!')
}
else if (ano >2002){
    console.log('Voce nao precisa votar nas eleicoes deste ano!')
}