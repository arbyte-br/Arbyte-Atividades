var rs = require('readline-sync');

var exemplo = 1990;
var texto = 'EXEMPLO ' + exemplo.toString();
var ano = rs.questionInt('Por favor digite um ano => ' + `${texto}: \n`);
var atual = 2020;

if(ano < 2002){
    console.log('Neste ano de ' + `${atual},` + ' voce podera votar!' )
}else{
    console.log('Esse ano de ' + `${atual},` + ' voce nao podera votar!')
}
//console.log(texto);