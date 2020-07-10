var rs = require('readline-sync');

var texto = rs.question('Insira qualquer texto para saber se a peimeira letra é maiúscula ou não: ')

console.log(texto[0]);

if(texto[0] == texto[0].toUpperCase()){
    console.log('A primeira letra é maiúscula!')
}else{
    console.log('A primeira letra é minúscula!')
}