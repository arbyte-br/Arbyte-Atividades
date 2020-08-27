// Faça um algoritmo que receba uma CEP e diga qual é o endereço 
// completo (Cidade, rua, estado) deste CEP. 
// Utilize a API : ​https://api.postmon.com.br/v1/cep/​{CEP} 
// Exemplo CEP :​https://api.postmon.com.br/v1/cep/89010020 

const axios = require('axios')
const rs = require('readline-sync')
let url = '​https://api.postmon.com.br/v1/cep/'

cep = rs.question('Insira seu CEP:\n')

url = url + cep

axios.get(url)
.then(res => {
    console.log('Você mora na:')
    console.log('Cidade: ' + res.data.cidade)
    console.log('Rua: ' + res.data.logradouro)
    console.log('Estado: ' + res.data.estado)
})
.catch(err => {
    console.log(err)
})