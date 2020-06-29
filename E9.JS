var rs = require('readline-sync');

var faixa = rs.questionInt('Digite um numero: ');

if(faixa >= 100 && faixa <= 200){
    console.log('Voce digitou o numero: ' + `${faixa}` + ' este numero esta entre 100 e 200')
}else{
    console.log('Voce digitou o numero: ' + `${faixa}` + ' este numero nao esta entre 100 e 200')
}