var rs = require('readline-sync');

var bips = rs.questionInt('Informe os números de bips: ');

while(bips > 0){
    console.log(bips);
    bips--;
}