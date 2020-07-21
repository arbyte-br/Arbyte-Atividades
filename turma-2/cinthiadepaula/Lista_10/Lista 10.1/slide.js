const rs = require('readline-sync')

class usuarioApp {
    constructor (nome, email, endereco, pagamento) {
        this.nome=nome;
        this.email=email;
        this.endereco=endereco;
        this.pagamento=pagamento;
        this.seuDestino= null;
        this.suaLocalizacao=null;
    }
    set destino (seuDestino){
        this.destino=seuDestino;
    }
    set localizacao (suaLocalizacao){
        this.suaLocalizacao=suaLocalizacao;
    }
};
 
const usuario1 = new usuarioApp ("Fulanin", "fulanin@treco.com", "rua lokura", "cartão");
usuario1.seuDestino=rs.question('Digite seu destino: ');
usuario1.suaLocalizacao=rs.question('Digite sua localização: ');
console.log(usuario1);