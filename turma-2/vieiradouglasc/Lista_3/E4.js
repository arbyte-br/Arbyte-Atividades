let readlineSync = require('readline-sync');
let num = readlineSync.questionInt('Insira um núemro: ');
while (num >= 0){
    if(num % 2 == 0) {
        console.log(num);
        num = num - 2;
    } else {
        num = num - 1;
    }
}
