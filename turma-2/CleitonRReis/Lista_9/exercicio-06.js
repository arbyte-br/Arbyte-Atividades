/*6 - Desestruture o objeto abaixo:

const usuario = {
    id: 1,
    apelido: 'acarrara',
    nomeCompleto: {
        nome: 'Cleiton',
        sobrenome: 'Reis'
    }
};

Em duas variáveis: apelido e primeiroNome.
*/

const usuario = {
    id: 1,
    apelido: 'acarrara',
    nomeCompleto: {
        nome: 'Cleiton',
        sobrenome: 'Reis'
    }
};

const { apelido, nomeCompleto: { nome: primeiroNome } } = usuario;

console.log(apelido, primeiroNome);