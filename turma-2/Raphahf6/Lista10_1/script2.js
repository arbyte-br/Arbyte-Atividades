const usuario99 = require('./script1')

const motorista = new usuario99('Raphael', 'Raphaellima6@gmail.com', 'São Paulo', '')

class Motorista99 {
    constructor(cnh, cpf){
        this.nome = motorista.nome
        this.email = motorista.email
        this.endereco = motorista.endereco
        this.cnh = cnh
        this.cpf = cpf
    }
}


let novoMotorista = new Motorista99('09558749982', '28810703880')

console.log(novoMotorista)