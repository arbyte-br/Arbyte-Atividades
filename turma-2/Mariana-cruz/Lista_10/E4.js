// 4. (OBRIGATÓRIO) Criar um algoritmo que receba 2 carros e verifique se os carros são
// iguais
// Para isso :
// Crie uma classe Carro que receba as variáveis nome, modelo e cor no construtor e
// inicialize as propriedades com estes valores.
// Após isso informe ao usuário para cadastrar o primeiro carro e peça, o nome, modelo e
// cor.
// Após informar o primeiro carro peça o segundo carro também solicitando nome, modelo
// e cor.
// Ao final o algoritmo deve comparar se os carro são iguais.
// Um carro vai ser igual ao outros se modelo e nome possuem o mesmo valor.

let rs = require('readline-sync');

class Carro {
  constructor() {
    this.name = rs.question('>> Insira o nome de um carro:\n');
    this.model = rs.question('>> Insira um modelo:\n');
    this.color = rs.question('>> Insira uma cor\n');
  }
}

let car1 = new Carro();

let car2 = new Carro();

if (car1.name == car2.name && car1.model == car2.model) {
  console.log('Os carros são iguais');
} else {
  console.log('Os carros não são iguais');
}
