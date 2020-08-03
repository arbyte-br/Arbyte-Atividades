// (OBRIGATÓRIO)Faça um algoritmo que receba uma CEP e diga qual é o endereço
// completo (Cidade, rua, estado) deste CEP.
// Utilize a API : https://api.postmon.com.br/v1/cep/{CEP}
// Exemplo CEP :https://api.postmon.com.br/v1/cep/89010020

const axios = require('axios')
const rs = require('readline-sync')

const cepUsuario = rs.question('Insira seu Cep: ')

axios.get = `https://api.postmon.com.br/v1/cep/${cepUsuario}`
.then((resposta) =>{
    return console.log(resposta.data)
})

try {

} catch (error) {

}

