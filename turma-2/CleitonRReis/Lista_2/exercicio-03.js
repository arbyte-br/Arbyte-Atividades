var rs = require('readline-sync');

var ddi = 0;

console.log('Ionforme seu DDI para saber seu país!')

var ddi = rs.questionInt('Digite seu DDI: ');

if(ddi == 1){
    console.log('Seu pais é: Estados Unidos.')
}else if(ddi == 49){
    console.log('Seu país é: Alemanha.')
}else if(ddi == 54){
    console.log('Sei país é: Argentina.')
}else if(ddi == 55){
    console.log('Seu país é: Brasil.')
}else if(ddi == 35){
    console.log('Seu país é: Portugal.')
}else{
    console.log('DDI não cadastrado!')
}