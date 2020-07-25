// Desestruture o objeto abaixo
// Em duas variáveis: apelido e primeiroNome.

const usuario = {
    id: 1,
    apelido: 'acarrara',
    nomeCompleto: {
        nome: 'Agostinho',
        sobrenome: 'Carrara'
    }
}
const {apelido, nomeCompleto: {nome} } = usuario
console.log('Apelido:', apelido)
console.log('Primeiro nome:', nome)

