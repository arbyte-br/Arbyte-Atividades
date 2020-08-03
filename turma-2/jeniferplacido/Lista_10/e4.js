//(OBRIGATÓRIO)​Criae se os carr um algoritmo que receba 2 carros e verifiquros são iguais
//Para isso :Crie uma classe Carro que receba as variáveis nome, modelo e cor no  ok e
//inicialize as propriedades com estes valores.Após isso informe ao usuário para cadastrar o 
//primeiro carro e peça, o nome, modelo ecor.Após informar o primeiro carro peça o segundo carro
// também solicitando nome, modeloe cor.Ao final o algoritmo deve comparar se os carro são iguais.
//Um carro vai ser igual ao outros se modelo e nome possuem o mesmo valor.

let rs = require ("readline-sync")

class carro {
    constructor(){
    this.fabricante = rs.question("Qual a fabricante do seu carro?").toUpperCase()
    this.modelo = rs.question("Qual o modelo do seu carro?").toUpperCase()
    this.cor = rs.question("Qual a cor do seu carro?").toUpperCase()

    }

}
let car = new carro()
let car2 = new carro()

if(car.fabricante == car2.fabricante && car.modelo == car2.modelo)
{
 console.log("Os carros são iguais")
}else {
console.log("Os carros são diferentes")
}


