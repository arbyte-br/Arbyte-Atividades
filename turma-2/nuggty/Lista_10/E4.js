const user = require('readline-sync');

class Carro {
    constructor() {
        this.nome = user.question('Digite o nome do carro: ');
        this.modelo = user.question('Digite o modelo do carro: ');
        this.cor = user.question('Digite a cor do carro: ');

        this.nome2 = user.question('Digite o nome do segundo carro: ');
        this.modelo2 = user.question('Digite o modelo do segundo carro: ');
        this.cor2 = user.question('Digite a cor do segundo carro: ');
    }
    comparar() {
        if(this.nome == this.nome2 && this.modelo == this.modelo2) {
            return 'Os nomes e os modelos são iguais!'
        } else {
            return 'Os nomes e os modelos são diferentes!'
        }
    }
}

let resultado = new Carro();

console.log(resultado.comparar());