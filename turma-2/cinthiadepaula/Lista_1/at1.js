let rs = require ('readline-sync');

let ano = rs.question('Digite o ano do seu aniversario: ');

if(ano < 2002){
    console.log('voce podera votar esse ano')
   
}

else console.log(' voce não podera voltar')