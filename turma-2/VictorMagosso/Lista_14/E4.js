const rs = require('readline-sync')
const axios = require('axios')

async function verificarEndereco(cep){
    try{
        //nao deu certo nao sei o motivo
        const retornoApi = await axios.get(`https://api.postmon.com.br/v1/cep/​${cep}`)
        const cepTrabalhado = retornoApi.data
        console.log(typeof cepTrabalhado)

        console.log(cepTrabalhado)
    }catch (erro){
        console.log('Poxa vida! Seu CEP não existe :(')
    }
}
verificarEndereco('02167080')
    .then(console.log)