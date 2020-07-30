const axios = require('axios')
const rs = require('readline-sync')

let cep = rs.question('Digite seu CEP: ')

let urlApi = `https://api.postmon.com.br/v1/cep/${cep}`

axios.get(urlApi)
    .then(res => {
        console.log(`Cidade: ${res.data.cidade}`);
        console.log(`Bairro: ${res.data.bairro}`);
        console.log(`Rua: ${res.data.logradouro}`);
        console.log(`Estado: ${res.data.estado}`);
    })
    .catch(err => {
        console.log(err);
    })
