let rs = require('readline-sync');

let consumo = Number(rs.question('Quantos kw foram consumidos? '));

let precoKw = (1045 / 7) / 100;

console.log('O valor do kw e de ' + precoKw.toFixed(2) + ' reais.');

let valorTotal = precoKw.toFixed(2) * consumo;

console.log('Sua conta e de ' + valorTotal + ' reais.');

let valorDesconto = valorTotal * 0.9;

console.log('Com desconto, sua conta fica ' + valorDesconto + ' reais.');