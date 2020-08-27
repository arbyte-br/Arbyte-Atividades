// Agora crie um usuário que represente um motorista, 
// com atributos e métodos próprios. Lembre-se que você deve evitar código
// duplicado. Logo, você pode extrair alguns comportamentos do usuário 
// criado anteriormente para um usuário base e a partir daí fazer com que 
// UsuarioCliente e UsuarioMotorista sejam filhas da classe pai.

class Pessoa {
    constructor(funcao, nome, email, endereco){
        this.funcao = funcao,
        this.nome = nome,
        this.email = email
        this.endereco = endereco
    }
}

const user = new Pessoa('usuario', 'Elian', 'elian@elian.com', 'rua Síria')
const driver = new Pessoa('motorista', 'Ricardo','ricardo@ricardo.com', 'avenida Brasil')

console.log(user)
console.log()
console.log(driver)