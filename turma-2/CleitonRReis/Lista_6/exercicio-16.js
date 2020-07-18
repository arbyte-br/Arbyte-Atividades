/*
20. Faça um algoritmo que pergunta para o usuário se ele quer criptografar ou
descriptografar.
Utilize como criptografia a cifra de césar
Exemplo ->
Entrada : ARBYTE
SAIDA: DUEBWH
Caso o usuario opte por criptografar o algoritmo deve aplicar a cifra de césar e mostrar
o valor criptografado
Caso o usuário opte por descriptografar o algoritmo deve fazer a engenharia reversa e
retorna ao valor antes de criptografia.
Utilize todo o conhecimento até aqui pra desenvolver este algoritmo
*/

const rs = require('readline-sync');


var opcao = rs.questionInt(' 1 - Criptografar \n 2 - Descriptografar \n\n Digite sua opcao: ')

var alfabeto = [
  'A', 'B', 'C', 'D', 'E', 'F',
  'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R',
  'S', 'T', 'U', 'V', 'X', 'W',
  'Y', 'Z'
];

if (opcao == 1) {
  var palavra = rs.question('\nDigite a palavra para criptografar: ')
  var n = rs.questionInt('\nDigite o número de casas: ')
  var palavraCriptografada = '';

  for (var i = 0; i < palavra.length; i++) {
    var letra = palavra.charAt(i).toUpperCase();
    var indice = alfabeto.indexOf(letra)
    var posicaoLetraCriptografada = (indice + n) % 26;
    palavraCriptografada = palavraCriptografada.concat(alfabeto[posicaoLetraCriptografada]);
  }

  console.log(palavraCriptografada);

} else if (opcao == 2) {
  var palavra = rs.question('\nDigite a palavra para descriptografar: ')
  var n = rs.questionInt('\nDigite o número de casas: ')
  var palavraDescriptografada = '';

  for (var i = 0; i < palavra.length; i++) {
    var letra = palavra.charAt(i).toUpperCase();
    var indice = alfabeto.indexOf(letra)
    var posicaoLetraDescriptografada = (indice - n) % 26;
    palavraDescriptografada = palavraDescriptografada.concat(alfabeto[posicaoLetraDescriptografada]);
  }
  
  console.log(palavraDescriptografada)

} else {
  console.log('Opção inválida');
}


// let nome = rs.question('Insira um nome: ')
// let n = rs.questionInt('Insira um nº: ')

// let cripto = (`${nome}.charCodeAt(0) - 65 + ${n}`) % 26 + 65

// console.log(cripto);