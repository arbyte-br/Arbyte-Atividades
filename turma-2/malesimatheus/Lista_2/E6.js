let rs = require('readline-sync');

let preco = Number(rs.question('Qual o preco da etiqueta? '));

let formaPagamento = rs.question('Como você deseja pagar? ');

let parcelas = 0;

switch (formaPagamento) {
    case 'dinheiro' :
        console.log(preco * 0.9);
        break;
    case 'cheque' :
        parcelas = rs.question('Em 1 ou 2 vezes?');
        if (parcelas == '1') {
            console.log(preco * 0.9);
        } else {
            console.log(preco);
        }
        break;
    case 'cartão de debito' :
        console.log(preco);
        break;
    case 'cartao de credito' :
        parcelas = rs.question('Em 1 ou 2 vezes?');
        if (parcelas == '1') {
            console.log(preco);
        } else {
            console.log(preco * 1.1);
        }
        break;
    default:
        console.log('Forma de Pagamento invalida!')

}