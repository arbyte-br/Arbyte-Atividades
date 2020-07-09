
/* 
(OBRIGATÓRIO) Crie um programa que crie um objeto chamado "carro" com as
propriedades "marca", "cor" e "valor" e imprima o objeto na tela. (Você pode decidir o
valor de "marca", "cor" e "valor", não é necessário pedir para o usuário)
*/

let rs = require('readline-sync')

let modelo = rs.question('Qual o seu carro?' )
let marca = rs.question('Qual a marca? ')
let cor = rs.question('qual a cor ? ')
let valor = rs.question('Qual o valo? ')

let carro = {
   marca: marca, cor : cor, modelo: modelo, valor: valor
}
console.log(carro)








/* function mostrarProps(obj, nomeDoObj) {
    var resultado = "";
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
          resultado += nomeDoObj + "." + i + " = " + obj[i] + "\n";
      }
    }
    return resultado;
  } */