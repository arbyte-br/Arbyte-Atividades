const rs = require('readline-sync')
const axios = require('axios')

class Usuario {
  constructor(nome, cep) {
    this.nome = nome
    this.cep = cep
  }
}
let usuario = new Usuario('Paulo', rs.question('Digite aqui seu cep: '))

buscaEndereco(usuario.cep)

function buscaEndereco(cep) {
  
  console.log("Buscando informações do endereço para o cep: " + cep + "...")
  
  const url = "https://api.postmon.com.br/v1/cep/"
  const urlComCep = "https://api.postmon.com.br/v1/cep/" + cep
  axios.get(urlComCep)
  .then(respostaDaApiQuandoDaCerto => {
  
    console.log("\n\nResposta da API\n\n")
    console.log("Rua: " + respostaDaApiQuandoDaCerto.data.logradouro)
    console.log("Bairro: " + respostaDaApiQuandoDaCerto.data.bairro)
    console.log("Cidade: " + respostaDaApiQuandoDaCerto.data.cidade)
    console.log("Estado: " + respostaDaApiQuandoDaCerto.data.estado)
  })
  .catch(respostaDaApiQuandoDeuErro => {
    console.log("Deu erro: " + respostaDaApiQuandoDeuErro)
  })
}