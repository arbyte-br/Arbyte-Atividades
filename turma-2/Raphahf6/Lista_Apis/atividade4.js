const axios = require('axios')
const rs = require('readline-sync')

const cep = rs.question('Digite o numero do seu cep: ')
const url = `https://api.postmon.com.br/v1/cep/${cep}`


getEndereco = () =>{
    const api = axios.get(url)

    .then(({data}) =>{
        const {bairro, cidade, logradouro, estado} = data

        console.log(`Cidade: ${cidade}`)
        console.log(`Estado: ${estado}`)
        console.log(`Rua: ${logradouro}`)

    })

    .catch(error =>{
        console.log('Cep invalido')
        console.log(error)
    })
}
 getEndereco()