let rs = require('readline-sync');

let write = rs.question('escreva alguma coisa: ');

let cont = 0;

while(cont < write.length){
    console.log(`${write[cont]}`)
    cont++
}