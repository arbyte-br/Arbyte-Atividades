let rs = require('readline-sync');

let valor = rs.question('Insira 0 para sair ou qualquer tecla para continuar... ');


while (valor != 0) {
    let valor = rs.question('Insira 0 para sair ou qualquer tecla para continuar... ');

    if (valor == 0)
        break;
}