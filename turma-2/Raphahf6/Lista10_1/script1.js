// 1 (OBRIGATÓRIO) - Crie uma classe que represente um usuário de um
// app como uber ou 99. O Usuário deve ter alguns atributos como nome,
// email, endereço primário, formas de pagamento, etc.

// 2 (OBRIGATÓRIO) - Usando a classe do exercício anterior, crie métodos
// que representem possíveis ações do usuário no aplicativo.

// ex: solicitarNovaViagem(local), editarEnderecoPrimario(endereco),
// adicionarFormaDePagamento(pagamento)

class Pessoa {
    constructor(nome, email, endereco, formaDePagamento){
        this.nome = nome
        this.email = email
        this.endereco = endereco
        this.formaDePagamento = [formaDePagamento]

    }

    solicitarNovaViagem(local){
        this.local = local
        console.log(`Solicitando viagem para ${this.local}`)
    }

    editarEnderecoPrimario(enderecoEditado) {
        this.endereco = enderecoEditado
    }

    adicionarFormaDePagamento(novaFormaDePagamento){
        this.novaFormaDePagamento = novaFormaDePagamento
        this.formaDePagamento.push(novaFormaDePagamento)
    }
}

let usuario99 = new Pessoa('raphael', 'raphaellima6@gmail.com', 'rua feitiço da vila', 'picpay')

usuario99.adicionarFormaDePagamento('MasterCard')

console.log(usuario99)


calcularValorDaCorrida = (kilometros) => {
    this.valorDaCorrida = kilometros * 2
    return(`O valor da corrida é ${this.valorDaCorrida}`)
}

console.log(calcularValorDaCorrida(20))



module.exports = Pessoa;
