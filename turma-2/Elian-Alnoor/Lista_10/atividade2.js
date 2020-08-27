// Usando a classe do exercício anterior, crie métodos 
// que representem possíveis ações do usuário no aplicativo.
// ex: solicitarNovaViagem(local), editarEnderecoPrimario(endereco), 
// adicionarFormaDePagamento(pagamento)
const rs = require('readline-sync')

class Usuario {
    constructor() {
        this.nome = 'Elian',
        this.email = 'elian@elian.com.br'
        this.endereçoPrimario = 'rua dos sírios, 758'
        this.formaPagamento = 'credito'
    }
    chamar = () =>{
        let destino = rs.question('para onde quer ir?\n')
        console.log(`Você vai de ${this.endereçoPrimario} para ${destino}`)
    }
    mudarFormaPag = () =>{
        let novaForma = rs.question('qual seria a forma de pagamento?\n')
        console.log(`agora vai pagar com ${novaForma}`)
    }
}

let user = new Usuario()
console.log(user)
user.mudarFormaPag()
user.chamar()