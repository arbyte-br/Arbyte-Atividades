// Crie um método estático que calcule a estimativa de 
// valor da corrida. Ele deve receber um valor em km e retornar um valor em 
// reais.
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
    valorCorrida = (distancia) => {
        let valor = distancia * 1.95
        return `Você vai viajar ${distancia} km, e vai pagar o valor de R$ ${valor}`
    }
}
let user = new Usuario()

console.log(user.valorCorrida(4.2))