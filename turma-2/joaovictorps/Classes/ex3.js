const {cadastrarUsuario} = require('./classesEFuncoes')

function cadastrarUsuarios() {
    let usuario1 = cadastrarUsuario()
    
    let usuario2 = cadastrarUsuario()

    if(usuario1.nome == usuario2.nome) console.log('Usuários com nomes iguais.')
    if(usuario1.idade == usuario2.idade) console.log('Usuários com idades iguais.')
    if(usuario1.cpf == usuario2.cpf) console.log('Usuários estão com o mesmo cpf.')
    if(usuario1.cidade == usuario2.cidade) console.log('Usuários estão na mesma cidade.')
    if(usuario1.idade == usuario2.idade) console.log('Usuários estão com o mesmo telefone.')
}

cadastrarUsuarios()