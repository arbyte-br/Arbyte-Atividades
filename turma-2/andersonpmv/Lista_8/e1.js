let rs = require('readline-sync');



let modelo = rs.question('insira um modelo: ');
let cor = rs.question('insira uma cor: ');
let marca = rs.question('insira uma marca: ');

function carro(){
    return {
        'modelo': modelo,
        'cor': cor,
        'marca': marca  
    }
}

console.log(carro())