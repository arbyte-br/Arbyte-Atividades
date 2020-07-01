let readlineSync = require('readline-sync')
let msg = 1

while (msg !== 0) {
   msg = readlineSync.question('Insira 0 para sair ou outra tecla para continuar ')
   if (msg == 0) {
   break;
   }
}
console.log('FIM')

