const rs = require('readline-sync')

class Validador {
    static validaNumero(telefone) {
        let regex = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;
        return regex.test(telefone) ? true : false
    }

    static validaCPF(cpf) { 
        var Soma;
        var Resto;
        Soma = 0;
      if (cpf == "00000000000") return false;
    
      for (let i=1; i<=9; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
      Resto = (Soma * 10) % 11;
    
        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(cpf.substring(9, 10)) ) return false;
    
      Soma = 0;
        for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;
    
        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(cpf.substring(10, 11) ) ) return false;
        return true;
    }
}

class Pessoa {
    constructor(nome, idade, cpf, cidade, telefone) {
        this.nome = nome,
        this.idade = idade,
        this.cpf = cpf,
        this.cidade = cidade,
        this.telefone = telefone
    }

    novoCpf() { 
        this.cpf = rs.question('Por favor, informe um cpf válido: ')
    }

    maioridade() {
        if(this.idade >= 18) {
            console.log("Usuário é maior de idade.")
        } else {
            console.log("Usuário é menor de idade.")
        }
    }

    novoTelefone() {
        this.telefone = rs.question('Informe um número de telefone válido: ')
    }
}


const cadastrarUsuario = () => {
    let nome = rs.question('Qual o seu nome ? \n >')

    let idade = rs.questionInt('Qual sua idade? \n')

    let cpf = rs.question('Informe o seu CPF: ')

    let cidade = rs.question('Qual a cidade em que você mora ? \n')

    let telefone = rs.question('Informe o seu número de telefone: ')

    let usuario = new Pessoa(nome, idade, cpf, cidade, telefone)

    while(!Validador.validaCPF(usuario.cpf)) {
        console.log('CPF inválido.')
        usuario.novoCpf()
    }

    console.log('CPF válido!')

    while(!Validador.validaNumero(usuario.telefone)) {
        console.log('Número de telefone inválido.')
        usuario.novoTelefone()
    }
    
    console.log('Número de telefone válido!')
    console.log('Cadastro bem sucedido!')

    return usuario
}

module.exports = {cadastrarUsuario}