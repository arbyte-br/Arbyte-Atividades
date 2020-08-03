/*(OBRIGATÓRIO) Faça um algoritmo que receba uma CEP e diga qual é o endereço
completo (Cidade, rua, estado) deste CEP.
Utilize a API : https://api.postmon.com.br/v1/cep/ {CEP}
Exemplo CEP : https://api.postmon.com.br/v1/cep/89010020/
*/

const axios = require('axios')
const rs = require('readline-sync')
const url = 'https://api.postmon.com.br/v1/cep/'

let cep = rs.question('Digite um cep: ')

axios.get(url + cep)
    .then(res => {
        console.log("Cidade: ",res.data.cidade)
        console.log('Rua: ', res.data.logradouro)
        console.log("Estado: ", res.data.estado)
    }) 