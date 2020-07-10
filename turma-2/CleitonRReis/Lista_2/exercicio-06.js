var rs = require('readline-sync');

var preco = 0;
var pagamento = 0;
var conta1 = 0;
var conta2 = 0;
var conta3 = 0;
var desconto = 0.10;

var preco = rs.questionFloat('Informe o valor do pruduto: ')
var pagamento = rs.question('Informe a forma de pagamento para saber se você terá algum desconto: ');

var conta1 = preco * .10;
var conta2 = (preco * 0.15) + preco;
var conta3 = preco - conta1;

if(pagamento == 'dinheiro' || pagamento == 'cheque'){
   console.log(`Você recebeu 10% de desconto! Nesse caso o valor fica em: ${conta3}`);
}else if(pagamento == 'cartao de credito'){
   console.log('Você recebeu 15% de desconto!') 
}else{
   console.log(`Nesse caso terá um acréscimento de 15%. O valor fica em: ${conta2}`);
}