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