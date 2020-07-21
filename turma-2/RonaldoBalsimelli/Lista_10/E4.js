/* 4. (OBRIGATÓRIO) Criar um algoritmo que receba 2 carros e verifique se os carros são
iguais
Para isso :
Crie uma classe Carro que receba as variáveis nome, modelo e cor no construtor e
inicialize as propriedades com estes valores.
Após isso informe ao usuário para cadastrar o primeiro carro e peça, o nome, modelo e
cor.
Após informar o primeiro carro peça o segundo carro também solicitando nome, modelo
e cor.
Ao final o algoritmo deve comparar se os carro são iguais.
Um carro vai ser igual ao outros se modelo e nome possuem o mesmo valor */

let rs = require ("readline-sync")

    class Carro {
        constructor () {
        this.nome = rs.question ("Qual o modelo do carro? \n")
        this.marca = rs.question ("Qual a marca do carro? \n")
        this.cor = rs.question ("Qual a cor do carro? \n")

        this.nome2 = rs.question ("Qual o modelo do carro 2? \n")
        this.marca2 = rs.question ("Qual a marca do carro 2? \n")
        this.cor2 = rs.question ("Qual a cor do carro 2? \n")
        }

        getIgual(){
            let Carro = 0
            if (this.nome == this.nome2 && this.marca == this.marca2 && this.cor != this.cor2){
                return "Nomes e Marcas iguais"  
            }
            else {
                return "Carros e modelos Diferentes"
            }
        }
    }
    const carro = new Carro
    console.log (carro.getIgual()) 