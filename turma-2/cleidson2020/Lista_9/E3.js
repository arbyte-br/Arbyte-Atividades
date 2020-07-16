const isOdd = require('is-odd');

let rs = require('readline-sync');

let pergunta = rs.questionInt('Insira um número');

if(isOdd(pergunta) == true){
    console.log('Este Número E Impar')
}else{
    console.log('Este Número e Par')
}

//console.log(isOdd(pergunta)); //=> true






/* var pergunta = rs.questionInt("Digite um numero");
var total = pergunta/2;

if(pergunta & 1){
    console.log("Impar");
} else {
    console.log("Par");
}

console.log(total); */