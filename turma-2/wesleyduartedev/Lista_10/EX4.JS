/*(OBRIGATÓRIO) Criar um algoritmo que receba 2 carros e verifique se os carros são
iguais
Para isso :
Crie uma classe Carro que receba as variáveis nome, modelo e cor no construtor e
inicialize as propriedades com estes valores.
Após isso informe ao usuário para cadastrar o primeiro carro e peça, o nome, modelo e
cor.
Após informar o primeiro carro peça o segundo carro também solicitando nome, modelo
e cor.
Ao final o algoritmo deve comparar se os carro são iguais.
Um carro vai ser igual ao outros se modelo e nome possuem o mesmo valor.*/

var rs = require('readline-sync');

class Carro {
    constructor (){
        this.nome = rs.question('Digite o nome do carro: ');
        this.modelo = rs.question('Digite o modelo do carro: ');
        this.cor = rs.question('Digite a cor do carro: ');

    }
    getComparacao (){
    }
}
const carromodelo1 = new Carro();
const carromodelo2 = new Carro();

   if ( carromodelo1.nome === carromodelo2.nome &&  carromodelo1.modelo === carromodelo2.modelo ){
      console.log(`O nome e modelo são iguais, Primeiro modelo é: ${carromodelo1.nome} ${carromodelo1.modelo}
                                                Segundo modelo é: ${carromodelo2.nome} ${carromodelo2.modelo}`) 
    }else {
        console.log(`Os modelos e cores são diferentes` , carromodelo1, carromodelo2);
    }
   

//console.log(carromodelo);
