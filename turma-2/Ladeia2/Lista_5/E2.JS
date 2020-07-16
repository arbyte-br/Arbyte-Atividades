/* OBRIGATÓRIO) Faça um programa que leia dois números, o primeiro é o valor inicial
de um contador, e o segundo é o valor final do contador (verifique se o valor inicial
fornecido é inferior ao
valor final). Usando o comando For, escreva na tela uma contagem que comece no
primeiro número lido, escreva os números seguintes colocando apenas um número em
cada nova linha da tela, até chegar ao valor final indicado.
Entre com o Valor Inicial: 11
Entre com o Valor Final: 13
Contagem:
11
12
13
Final da contagem */

 
let rs = require('readline-sync')

var n0 = rs.question('Digite valor inicial: ')
var n1 = rs.question('Digite valor final: ')

if (n0 >= n1){
  console.log( 'NUMERO INICIAL MENOR QUE O NUMERO FINAL. ')
}else if (n0 < n1){
  for(null; n0 <= n1; n0++)
  console.log(n0)
}
             
/*  var valo1 = re('Digite Valor inicial: \n>> ')

 var valo2 = user.questionFloat('Digite Valor Final: \n>> ')
 
 for(var i = 3; i<=valo1; i++){

  console.log((i))
} */