let rs = require('readline-sync');

let comandoEscolhido = rs.question('Insira A para fechar. Insira B para fazer a soma: ');

while (comandoEscolhido != 'b' && comandoEscolhido != 'a') {
    comandoEscolhido = rs.question('Comando invalido! Insira A para fechar. Insira B para fazer a soma: ');
}

switch(comandoEscolhido) {
    case 'a' :
        console.log('Você saiu!!!')
        break;
    case 'b' :
        let n1 = Number(rs.question('Insira o primeiro numero '));
        let n2 = Number(rs.question('Insira o segundo numero '));
        let resultado = n1 + n2;
        console.log('A soma é ' + resultado);
        break;
}




