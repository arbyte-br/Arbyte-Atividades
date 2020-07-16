let rs = require('readline-sync');
let numPares = rs.questionInt('Insira um numero: ');
let cont = 0;

while (cont <= numPares){
    if(cont % 2 == 0){
        console.log(cont);
        cont ++;
        
    }else{
        cont++
    }
}
