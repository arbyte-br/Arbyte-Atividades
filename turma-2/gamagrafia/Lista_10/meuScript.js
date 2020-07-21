//Crie uma aplicação em JS que receba um nome do usuário e crie um novo usuário com o nome fornecido
// e o imprima na tela(ex.: "{nome: 'Italo'}"). 
//Este objeto deve ser criado usando uma classe


class nomeUsuario {
        constructor (nome) {
            this.nome= nome
        }
}

let novoNome = new nomeUsuario ('Guilherme')

console.log(novoNome)
