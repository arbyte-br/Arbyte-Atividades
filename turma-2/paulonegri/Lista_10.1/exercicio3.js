/*Crie um método estático que calcule a estimativa de
valor da corrida. Ele deve receber um valor em km e retornar um valor em
reais.*/

const rs = require('readline-sync')

class usuarioApp {
    constructor(nome, email, endereco, pagamento){
        this.nome = nome;
        this.email = email;
        this.endereco = endereco;
        this.pagamento = pagamento;
        this.seuDestino = null;
        this.suaLocalizacao = null;
        
    }

    set destino (seuDestino){
        this.destino = seuDestino;
    }
    set localizacao (suaLocalizacao){
        this.suaLocalizacao = suaLocalizacao;
    }
    set formaPag (pagamento){
        this.formaPag = pagamento;
    }
    
    static valorCorrida(distancia = 5){
        const valorKm = distancia * 1.4;
        return(`O valor da sua corrida é de ${valorKm} reais. `);
    }   
}

const primerioUsuario = new usuarioApp ('alguem', 'alguem@email.com', 'rua lugar', 'dinheiro');
primerioUsuario.suaLocalizacao = rs.question('Digite sua localizacao: ');
primerioUsuario.seuDestino = rs.question('Digite seu destino: ');

console.clear();
console.log(primerioUsuario);
console.log(usuarioApp.valorCorrida());

    