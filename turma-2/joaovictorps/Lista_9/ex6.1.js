const usuario = {
    id: 1,
    apelido: 'acarrara',
    nomeCompleto: {
        nome: 'Agostinho',
        sobreNome: 'Carrara',
    }
}

const {apelido, primeiroNome = usuario.nomeCompleto.nome} = usuario

console.log(apelido, primeiroNome)