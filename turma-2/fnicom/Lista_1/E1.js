let rs = require('readline-sync');

let ano = rs.questionInt("Por favor Informe o ano de seu nascimento: ");

if(ano <= 2002){
    console.log('Você pode votar');
}else{
    console.log('Não poderá votar esse ano');
}

