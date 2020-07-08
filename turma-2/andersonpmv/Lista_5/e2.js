let rs = require('readline-sync');

let valorInicial = rs.questionInt('Digite o valor inicial do contator: ');
let valorFinal = rs.questionInt('Digite o valor o valor final do contador: ');

while(valorInicial > valorFinal){
    console.log('Você digitou o valor inicial maior que o final, digite novamente');
    valorInicial = rs.question('Digite o valor inicial do contator: ');
    valorFinal = rs.question('Digite o valor o valor final do contador: ');
}

for(valorInicial; valorInicial <= valorFinal; valorInicial++){
    console.log(valorInicial);
}