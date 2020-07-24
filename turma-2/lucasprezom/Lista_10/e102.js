class Usuario {
    constructor (name, email, end, pagamento) {
        this.name = name,
        this.email = email,
        this.end = end,
        this.pagamento = pagamento
    } 

    EditarEndereco(endNovo) {
        this.end = endNovo
    }
    MudarPagamento(pagamentoNovo) {
        this.pagamento = pagamentoNovo
    }
}

let usuario1 = new Usuario ("Luis", 'luistom@gmail.com', 'São Paulo, rua Pontes', 'Cartão Visa')
   usuario1.EditarEndereco('Rua Aquario')
   usuario1.MudarPagamento('Cartão Mastercard')
   
console.log(usuario1)