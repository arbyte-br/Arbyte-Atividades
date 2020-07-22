// (OBRIGATÓRIO) -  Crie uma classe que represente um usuário de um app como uber ou 99. O Usuário deve ter alguns atributos como nome, email, endereço primário, formas de pagamento, etc.

class UsuarioDoApp {
    constructor(nome,email,enderecoPrimario,formaPagamento){
        this.nome = nome
        this.email = email
        this.enderecoPrimario = enderecoPrimario
        this.formaPagamento = formaPagamento
    }
    setSolicitarNovaViagem(local) {
        console.log(`Você está indo de ${this.enderecoPrimario} para ${local}.`)
    }
    setEditarEnderecoPrimario(enderecoNovo) {
         this.enderecoPrimario = enderecoNovo
    }
    setAdicionarFormaDePagamento(novaFormaDePagamento){
         this.formaPagamento = novaFormaDePagamento
    }
    imprimeUsuario(){
        console.log(this.nome,this.email,this.enderecoPrimario,this.formaPagamento)
    }
}

module.exports = UsuarioDoApp