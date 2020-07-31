const rs = require('readline-sync')
const axios = require('axios')  


class Usuario {
    constructor (nome, cep) {
        this.nome = nome
        this.cep = cep
    }
    }

 let usuario1 = new Usuario ('Pedro', rs.question('Digite seu CEP: '))   


 function buscaEndereco (cep) {
     console.log('Buscando informações do cep: ' + cep + '...')
    
     const url = 'https://api.postmon.com.br/v1/cep/'
     const urlComCep = url+cep

     axios.get(urlComCep)
     .then(respostaDaApi =>{
         console.log('\n\n Resposta da API\n\n')
         console.log('Rua: ' + respostaDaApi.data.logradouro)
         console.log('Bairro: ' + respostaDaApi.data.bairro)
         console.log('Cidade: ' + respostaDaApi.data.cidade)
         console.log('Estado: ' + respostaDaApi.data.estado)
     })
     .catch(respostaDaApiComErro => {
         console.log('Erro: ' + respostaDaApiComErro)
     })
 }

 buscaEndereco (usuario1.cep)