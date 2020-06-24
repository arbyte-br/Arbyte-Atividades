let readline = require('readline-sync');

let opcao = readline.question('Insira 0 para sair ou qualquer outra tecla para o continuar: ');
console.log('Voce digitou: ' + opcao);

if (opcao == 0) {
    console.log('FIM');
} else {
    while (opcao != 0) {
        opcao = readline.question('Insira 0 para sair ou qualquer outra tecla para o continuar: ');
        console.log('Voce digitou: ' + opcao);
    }
    console.log('FIM');
}