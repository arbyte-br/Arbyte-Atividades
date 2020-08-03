const rs = require('readline-sync')
const axios = require('axios')
const url = "​https://api.postmon.com.br/v1/cep/"

class Usuario {
    constructor(nome, cep) {
      this.nome = nome
      this.cep = cep
    }
  }
let usuario = new Usuario('Alexandre', 09380310)

buscaEndereco(usuario.cep)
function buscaEndereco(cep){
    console.log("Buscando informações do endereço para o cep: " + cep + "...")

    const urlComCep = `https://api.postmon.com.br/v1/cep/${cep}`
axios.get(urlComCep)
    .then(res => {
        console.log(res.data.bairro)
        console.log(data.cidade)
        console.log(data.logradouro)
    })
    .catch(err => {
        console.log('Esse CEP nao existe' + err)
    })
}