class Usuario {
    constructor (name, email, end, pagamento) {
        this.name = name,
        this.email = email,
        this.end = end,
        this.pagamento = pagamento
    }
}

let usuario1 = new Usuario ("Luis", 'luistom@gmail.com', 'São Paulo, rua Pontes', 'Cartão Visa')

console.log(usuario1)