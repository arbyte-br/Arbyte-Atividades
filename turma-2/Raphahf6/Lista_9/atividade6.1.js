const usuario = {
    id:1,
    apelido:'carrara',
    nomeCompleto: {
        nome:'Agostinho',
        sobrenome:'Carrara'
    }
}

const {apelido, nomeCompleto:{nome}} = usuario



console.log(`Seu nome é ${nome} e apelido: ${apelido}`)