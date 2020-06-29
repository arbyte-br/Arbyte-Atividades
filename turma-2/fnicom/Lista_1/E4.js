let rs = require('readline-sync');

let qntApple = rs.questionFloat('Quantas maçãs irá comprar?  ');
let preco = 0;
if( qntApple < 12){
    preco = 0.30;
    
}else{
    preco = 0.25;
    
}
console.log(`O valor total da compra é ${qntApple*preco}. `)