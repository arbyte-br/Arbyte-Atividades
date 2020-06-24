let readlineSync = require('readline-sync');

let digitou = readlineSync.question('Digite uma palavra e veja ela ficar ao contrario: ');

while (true) {
    console.log(digitou.split('').reverse().join(''));
    break;
}