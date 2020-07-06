//Faça uma função que recebe por parâmetro um valor inteiro e positivo
//e retorna o valor lógico Verdadeiro caso o valor seja primo e Falso em caso contrário.
//Solicite ao usuário o número e no final imprima se é primo ou não utilizando a função na
//condição IF.


let rs=require('readline-sync')
let numero = rs.questionInt('insira um número:')

function primo(num) {
    if (num >= 0) {
      for (let i = 2; i < num; i++)
        if (num % i === 0) {
          return false;
        } 
      return num > 1;
    } else {
      return `Valor negativo`;
    }
  }
  console.log(primo(numero))